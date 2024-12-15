import React from 'react'
import Teammember from '../components/Teammember'

const TeamMember = () => {
    const teammembers=[
        {
            name:"Subhankar Nath",
            url:"https://api.dicebear.com/9.x/initials/svg?seed='Subhankar Nath'&backgroundColor=2b3c2c&radius=50&size=96",
            role:"Developer"
        },
        {
            name:"Aniket Basu",
            url:"https://api.dicebear.com/9.x/initials/svg?seed='Aniket Basu'&backgroundColor=2b3c2c&radius=50&size=96",
            role:"Developer"
        },
        {
            name:"Md Salman",
            url:"https://api.dicebear.com/9.x/initials/svg?seed='Md Salman'&backgroundColor=2b3c2c&radius=50&size=96",
            role:"Developer"
        },
        {
            name:"Nilesh Das",
            url:"https://api.dicebear.com/9.x/initials/svg?seed='Nilesh Das'&backgroundColor=2b3c2c&radius=50&size=96",
            role:"Developer"
        }
    ]
  return (
    <div>
        <h2 className='mt-2 body-text-color p-3 text-center'>Our Team Members</h2><hr />
        <div className="row d-flex justify-content-center align-items-center">  
            <div style={{"width":"70rem"}} className='d-flex flex-wrap justify-content-center align-items-center'>
                    {
                        teammembers.map((onemember,index)=>{
                            return <Teammember key={index} object={onemember} />;
                        })
                    }
            </div>
        </div>
    </div>
  )
}

export default TeamMember
