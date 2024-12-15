import React, { useState } from 'react';

const Teammember = (props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="card m-1 p-3 text-center border border-0" style={{ width: "15rem", boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 20px", background: hovered ? "#c74900" : "#eaf4e8" }} onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)} >
      <div className="d-flex justify-content-center">
        <img
          src={props.object.url}
          className="card-img-top img-fluid"
          alt={props.object.name}
          style={{ width: "100px", height: "100px", borderRadius: "50%", border: hovered ? "2px solid #eaf4e8" : "2px solid #2b3c2c" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title mt-3 rounded-pill p-2" style={{background: hovered ? "#eaf4e8" : "#2b3c2c",color: hovered ? "#2b3c2c" : "#eaf4e8"}}>{props.object.name}</h5>
        <p className="card-subtitle mb-3 text-muted fw-bold">{props.object.role}</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a href={props.object.twitter} target="_blank" rel="noopener noreferrer" className="text-dark">
            <i className="bi bi-twitter"></i>
          </a>
          <a href={props.object.linkedin} target="_blank" rel="noopener noreferrer" className="text-dark">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href={props.object.github} target="_blank" rel="noopener noreferrer" className="text-dark">
            <i className="bi bi-github"></i>
          </a>
          <a href={`mailto:${props.object.email}`} className="text-dark">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Teammember;
