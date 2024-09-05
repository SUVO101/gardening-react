import React from 'react'
import { Link,useNavigate  } from 'react-router-dom'



const Plantcard = (props) => {
    const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle the button click and navigate with state
  const handleCheckAvailability = () => {
    navigate('/plantchecker', { state: { plantData: props.plantobj } }); // Pass props data to the next page
  };
  return (
    
        <div className="card m-3 p-0" style={{width: "18rem",background:"#DEF9C4", boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
            <img src={"../"+props.plantobj.plant_url} style={{width:"100%",height:"200px"}} className="card-img-top" alt={props.plantobj.plant_name} />
            <div className="card-body">
                <h5 className="card-title text-center text-hd">{props.plantobj.plant_name}</h5>
                <p className="card-text text-center text-dark">{props.plantobj.description}</p>
                {/* <a href="/plantchecker" className="btn btn-primary">Check availablity</a> */}
                <div className="d-flex">
                    <button className="btn btn-custom mx-auto" onClick={handleCheckAvailability} >
                        {/* <Link to="/plantchecker" className="text-light" style={{textDecoration:"none"}}>
                        Check availablity</Link> */}Check availablity
                    </button>
                </div>
            </div>
        </div>
    
  )
}

export default Plantcard
