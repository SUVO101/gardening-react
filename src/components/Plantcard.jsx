import React from 'react'


const Plantcard = (props) => {
  return (
    
        <div className="card m-3" style={{width: "18rem"}}>
            <img src={"../"+props.plantobj.plant_url} style={{width:"100%",height:"200px"}} className="card-img-top" alt={props.plantobj.plant_name} />
            <div className="card-body">
                <h5 className="card-title">{props.plantobj.plant_name}</h5>
                <p className="card-text">{props.plantobj.description}</p>
                <a href="#" className="btn btn-primary">Check availablity</a>
            </div>
        </div>
    
  )
}

export default Plantcard
