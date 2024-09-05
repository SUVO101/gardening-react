import React from 'react'
import TeamMember from './TeamMember'

const About = () => {
    
  return (
    <div className='container bg-mybody'>
       <h2 className='mb-2 text-hd p-3 text-center '>About us</h2><hr />
       <p className='lead ps-5 pe-5 text-success fs-4 text-center'>
            Smart Gardening is a modern approach to gardening that uses technology to
              make planting easier and more effective. It helps gardeners by giving advice
              based on important factors like weather, soil type, fertilisers and Plant
              Hardiness Zones (which show how well plants grow in different climates). With
              Smart Gardening, users can check if a plant will grow in their area based on
              their location, environmental conditions and weather. The system can also
              suggest the best plants for them to grow.
        </p>
        <TeamMember/>
        <div>
                
                <h3 className='text-center m-0 pt-4 text-primary'>Thanks For Visiting Our Site</h3>
                <h4 className='text-center m-0 pt-4 pb-4 text-hd'>Have a nice day!</h4>
        </div>
      
    </div>
  )
}

export default About
