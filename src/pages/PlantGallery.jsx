import React, { useEffect, useState } from 'react'
import Plantcard from '../components/Plantcard'
// import plant_json_data from '../plantarray.json'


const PlantGallery = () => {
    
    const [plantarray,setPlantarray]=useState([]);
    useEffect(()=>{
      fetch('/plantarray.json').
      then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch plants data');
        }
        return response.json();
      }).
      then((data)=>setPlantarray(data)).
      catch((error) => console.error('Error:', error));
    },[])

      const [search_result,setSearch_result]=useState('');
      const search_plant=(e)=>{
          setSearch_result(e.target.value.toLowerCase());
          //console.log(search_result);
      };

      // const filtered_plantarray=plantarray.filter((plant)=>{
      //     console.log(plant);
      // });


  return (
    <div className='container body-bg-color'>
        <div className="row d-flex justify-content-end p-3">
                 <div className="input-group" style={{width:"18rem",}}>
                     <input type="text" value={search_result} onChange={search_plant} className="form-control" placeholder="Search Your Plant..." aria-label="Input group example" aria-describedby="btnGroupAddon" />
                     <div className="input-group-text" id="btnGroupAddon">
                         <i className="bi bi-search"></i>
                     </div>
                </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center p-3">
            
            {/* {plantarray.map((plant, index) => (

                <Plantcard plantobj={plant} key={index} />
                ))
             } */}

             {
                plantarray
                  .filter((plant) => plant.plant_name.toLowerCase().includes(search_result))
                  .map((plant, index) => (
                    <Plantcard plantobj={plant} key={index} />
                  ))
              }

            
        </div>
    </div>
  )
}

export default PlantGallery
