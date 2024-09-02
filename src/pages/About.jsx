import React from 'react'
import Teammember from '../components/Teammember'

const About = () => {
    const teammembers=[
        {
            name:"Subhankar Nath",
            url:"https://media.licdn.com/dms/image/v2/D4D35AQErg31Y3jptLA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1699375608450?e=1725894000&v=beta&t=Es7p4KCfGQUkigv52_rirCuQjnEqdmlZf_X4c-AxoRc",
            description:"Developer"
        },
        {
            name:"Subhankar Nath",
            url:"https://media.licdn.com/dms/image/v2/D4D35AQErg31Y3jptLA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1699375608450?e=1725894000&v=beta&t=Es7p4KCfGQUkigv52_rirCuQjnEqdmlZf_X4c-AxoRc",
            description:"Developer"
        },
        {
            name:"Subhankar Nath",
            url:"https://media.licdn.com/dms/image/v2/D4D35AQErg31Y3jptLA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1699375608450?e=1725894000&v=beta&t=Es7p4KCfGQUkigv52_rirCuQjnEqdmlZf_X4c-AxoRc",
            description:"Developer"
        }
    ]
  return (
    <div className='container bg-light'>
       <h2 className='mt-2 mb-2 bg-dark text-success p-3'>About us</h2>
       <p className='lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, dolor minus
        </p>
        <h2 className='mt-2 mb-2 bg-dark text-success p-3'>Our Team Members</h2>
        <div className="row d-flex justify-content-center align-items-center">  
            {
                teammembers.map((onemember)=>{
                    return <Teammember key={onemember.name} object={onemember} />;
                })
            }
  
        </div>

        <h3 className='text-center mt-4'>Thanks For Visiting Our Site</h3>
        <h4 className='text-center mt-4'>Have a nice day!</h4>
    </div>
  )
}

export default About
