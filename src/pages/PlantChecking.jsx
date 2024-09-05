import React from 'react'
import RecomendPlantCardComponent from '../components/RecomendPlantCardComponent';
import { useLocation } from 'react-router-dom';

const PlantChecking = (props) => {
  const location = useLocation(); // Get location object
  const { plantData } = location.state || {}; // Access the passed state data
  const Recomendedarray = [
    {
      plant_url: "rose.webp", // Use images from the imported object
      plant_name: "Rose",
    },
    {
      plant_url: "sunflower.jpg",
      plant_name: "Sunflower",
    },
    {
      plant_url: "tulip.jpg",
      plant_name: "Tulip",
    },
  ];
  console.log(plantData);
  return (
    <div className='container bg-mybody'>
      <div className="row">
        <div className="col-md-6 p-3">
          <img src={"../"+plantData.plant_url} className="img-fluid" alt="..." style={{width:"100%",height:"400px",borderRadius:"10px"}}></img>
          <h3 className="my-2 bg-header rounded p-3 text-light">Plant Name: {plantData.plant_name}</h3>
          <div className="rounded p-3 text-success">
              <h4>Description</h4>
              <p>
                {plantData.description}
              </p>
          </div>
        </div>
        <div className="col-md-6 p-3">
              <div className="alert alert-success" role="alert">
              <i className="bi bi-check-circle-fill text-success"></i> This plant is suitable for your environment.
              </div>
          <div className="p-3 bg-highlight-success rounded text-success">
            <h3>To grow this plant you need</h3>
            <ul>
              <li>Climate</li>
              <li>Soil Type</li>
              <li>Soil Preparation</li>
              <li>Whether</li>
              <li>Etc</li>
            </ul>
          </div>

          <h3 className='mt-3 text-success'>Plant Recommendation</h3>
          <div className="p-0 m-0">
            <div className="d-flex" style={{ overflowX: "scroll"}}>
                {
                    Recomendedarray.map((plant, index) => (
                      <RecomendPlantCardComponent plantobj={plant} key={index} />
                    ))
                }
            </div>
          </div>
        </div>
       </div >
    </div >
  )
}

export default PlantChecking
