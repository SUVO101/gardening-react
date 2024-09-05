import React from 'react'

const RecomendPlantCardComponent = (props) => {
  return (
    <div>
        <div className="card m-2"  style={{width: "13rem" , flexShrink: 0}}>
            <img 
            src={"../" + props.plantobj.plant_url} style={{width:"100%", height:"200px"}} className="card-img-top" alt={props.plantobj.plant_name} 
            />
            <div className="card-body">
                <h5 className="card-title">{props.plantobj.plant_name}</h5>
            </div>
        </div>
    </div>
  )
}

export default RecomendPlantCardComponent
