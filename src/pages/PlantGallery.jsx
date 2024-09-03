import React from 'react'
import Plantcard from '../components/Plantcard'


const PlantGallery = () => {
    const plantarray = [
        {
          "plant_url": 'rose.webp', // Use images from the imported object
          "plant_name": "Rose",
          "description": "A rose is a flowering plant known for its beauty and fragrance."
        },
        {
          "plant_url": 'sunflower.jpg',
          "plant_name": "Sunflower",
          "description": "Sunflowers are tall flowers known for their large yellow heads and seeds."
        },
        {
          "plant_url": 'tulip.jpg',
          "plant_name": "Tulip",
          "description": "Tulips are colorful, bulbous flowers that bloom in the spring."
        },
        {
          "plant_url": 'orchid.jpg',
          "plant_name": "Orchid",
          "description": "Orchids are exotic flowers known for their unique shapes and vibrant colors."
        },
        {
          "plant_url": 'cactus.avif',
          "plant_name": "Cactus",
          "description": "Cacti are desert plants with thick, fleshy stems that store water."
        },
        {
          "plant_url": 'bamboo.jpg',
          "plant_name": "Bamboo",
          "description": "Bamboo is a fast-growing grass used in construction and crafts."
        }
      ];
    
      
  return (
    <div className='container'>
        <div className="row d-flex justify-content-end p-3">
                 <div className="input-group" style={{width:"18rem",}}>
                     <input type="text" className="form-control" placeholder="Search Your Plant..." aria-label="Input group example" aria-describedby="btnGroupAddon" />
                     <div className="input-group-text" id="btnGroupAddon">
                         <i class="bi bi-search"></i>
                     </div>
                </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
            
            {plantarray.map((plant, index) => (

                <Plantcard plantobj={plant} key={index} />
                ))
                }
            
        </div>
    </div>
  )
}

export default PlantGallery
