import React from 'react';

const RecomendPlantCardComponent = (props) => {
  return (
    <div onClick={props.onClick} style={{ cursor: "pointer" }} className='m-2 border rounded-circle border-secondary'>
      <div className="card p-0 rounded-circle" style={{ width: "9rem", backgroundColor: "#eaf4e8" }}>
        <div className="d-flex justify-content-center mt-3">
          <img
            src={"../" + props.plantobj.plant_url}
            className="rounded-circle img-fluid"
            style={{ width: "8rem", height: "8rem", objectFit: "cover" }}
            alt={props.plantobj.plant_name}
          />
        </div>
       
      </div>
    </div>
  );
};

export default RecomendPlantCardComponent;
