import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlantCard = (props) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle the button click and navigate with state
  const handleCheckAvailability = () => {
    navigate(`/plantchecker/${props.plantobj.id}`);
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      className="card plant-card p-0 border border-0"
      style={{ width: "16rem", backgroundColor: "#eaf4e8" ,margin:"3px", boxShadow: hovered ? "rgba(0, 0, 0, 0.2) 0px 8px 16px" : "rgba(0, 0, 0, 0) 0px 4px 8px"}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
        <img
          src={"../" + props.plantobj.plant_url}
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
          className="card-img-top"
          alt={props.plantobj.plant_name}
        />
        {hovered && (
          <div className="icon-overlay">
            <i className="bi bi-search" onClick={()=> handleCheckAvailability()}></i>
          </div>
        )}
      
      <div className="card-body text-center">
        <h5 className="card-title">{props.plantobj.plant_name}</h5>
        <div className="price-container">
          <span className="original-price"><i className="bi bi-currency-rupee"></i>{props.plantobj.price}</span>
          <span className="discounted-price"><i className="bi bi-currency-rupee"></i>{props.plantobj.price - 50 }</span>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
