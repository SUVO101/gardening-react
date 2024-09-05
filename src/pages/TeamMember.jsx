import React from 'react'
import Teammember from '../components/Teammember'

const TeamMember = () => {
    const teammembers=[
        {
            name:"Subhankar Nath",
            url:"https://avatars.githubusercontent.com/u/128243653?s=400&u=f0ecaaccc278dd31d09ff660962541ce166045a5&v=4",
            description:"Developer"
        },
        {
            name:"Subhankar Nath",
            url:"https://avatars.githubusercontent.com/u/128243653?s=400&u=f0ecaaccc278dd31d09ff660962541ce166045a5&v=4",
            description:"Developer"
        },
        {
            name:"Subhankar Nath",
            url:"https://avatars.githubusercontent.com/u/128243653?s=400&u=f0ecaaccc278dd31d09ff660962541ce166045a5&v=4",
            description:"Developer"
        },
        {
            name:"Subhankar Nath",
            url:"https://avatars.githubusercontent.com/u/128243653?s=400&u=f0ecaaccc278dd31d09ff660962541ce166045a5&v=4",
            description:"Developer"
        }
    ]
  return (
    <div>
        <h2 className='mt-5 text-hd p-3 text-center'>Our Team Members</h2><hr />
        <div className="row d-flex justify-content-center align-items-center">  
            {
                teammembers.map((onemember,index)=>{
                    return <Teammember key={index} object={onemember} />;
                })
            }
  
        </div>
    </div>
  )
}

export default TeamMember
