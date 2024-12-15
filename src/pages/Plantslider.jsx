import React, { useEffect, useState } from 'react';
import './PlantSlider.css';
import { useNavigate } from 'react-router-dom';

const PlantCarousel = () => {
  const [plants, setPlantarray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [centerIndex, setCenterIndex] = useState(0);
  const [hovered,sethovered]=useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    fetch('/plantarray.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch plants data');
        }
        return response.json();
      })
      .then((data) => {
        setPlantarray(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []);

  const handleNext = () => {
    setCenterIndex((prevIndex) => (prevIndex + 1) % plants.length);
  };

  const handlePrev = () => {
    setCenterIndex((prevIndex) => (prevIndex - 1 + plants.length) % plants.length);
  };

  const getPlant = (offset) => {
    const index = (centerIndex + offset + plants.length) % plants.length;
    return plants[index];
  };

  const plantchecker=(id)=>{
    navigate(`/plantchecker/${id}`);
  }

  if (isLoading) {
    return <div>Loading...</div>; // Loading indicator
  }

  return (
    //Lastest Products
    <>
      <div style={{border:"2px solid #2b3c2c"}}></div>
       <div className='body-bg-color p-3'>
          <h2 className="fw-bold text-center pt-3">Lastest Products</h2>
       </div>
          <div className="carousel-container body-bg-color">
      <button className="carousel-btn prev" onClick={handlePrev}><i className="bi bi-caret-left-fill body-text-color"></i></button>
      <div className="carousel">
        {[getPlant(-1), getPlant(0), getPlant(1)].map((plant, i) =>
          plant ? ( // Check if plant is defined
            <div
              key={plant.id}
              className={`carousel-card ${i === 1 ? 'center' : 'blur'} ${i === 0 ? 'slide-left' : i === 2 ? 'slide-right' : ''}`}
            >
              <img src={"../" + plant.plant_url} alt={plant.plant_name} className="plant-img" onMouseEnter={()=>sethovered(true)} onMouseLeave={()=>sethovered(false)} />
              {i === 1 && (
                <>
                  <h5 className="plant-name">{plant.plant_name}</h5>
                  <p className="plant-price"><i className="bi bi-currency-rupee"></i>{plant.price}</p>
                  <div className="icon-overlay body-bg-color" onMouseEnter={()=>sethovered(true)} onMouseLeave={()=>sethovered(false)} style={{opacity:hovered ? '1' :'0'}}>
                    <i className="bi bi-cart body-text-color fw-bold" onClick={()=>plantchecker(plant.id)}></i>
                    <i className="bi bi-heart body-text-color fw-bold" onClick={()=>plantchecker(plant.id)}></i>
                  </div>
                </>
              )}
            </div>
          ) : null
        )}
      </div>
      <button className="carousel-btn next" onClick={handleNext}><i className="bi bi-caret-right-fill body-text-color"></i></button>
    </div>
    </>
  );
};

export default PlantCarousel;
