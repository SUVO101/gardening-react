import React from 'react'
import TeamMember from './TeamMember'

const About = () => {
    
  return (
    <div className='container body-bg-color'>
      <div className='d-flex align-items-center justify-content-center pt-5 pb-5'>
          <div className="card body-dark-bg-color" style={{"width":"60rem"}}>
              <h5 className="card-header text-center body-light-text-color fs-3">About us</h5>
              <div className="card-body">
                  <p className='lead ps-5 pe-5 body-light-text-color fw-normal fs-5 text-center'>
                      Smart Gardening is a modern approach to gardening that uses technology to
                        make planting easier and more effective. It helps gardeners by giving advice
                        based on important factors like weather, soil type, fertilisers and Plant
                        Hardiness Zones (which show how well plants grow in different climates). With
                        Smart Gardening, users can check if a plant will grow in their area based on
                        their location, environmental conditions and weather. The system can also
                        suggest the best plants for them to grow.
                  </p>
              </div>
            </div>
      </div>
 
      
        <TeamMember/>
        <div>
                
                <h3 className='text-center m-0 pt-4 orange-text-color'>Thanks For Visiting Our Site</h3>
                <h4 className='text-center m-0 pt-4 pb-4 body-text-color'>Have a nice day!</h4>
        </div>
      
    </div>
  )
}

export default About
