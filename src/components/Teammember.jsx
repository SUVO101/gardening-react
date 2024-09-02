import React from 'react'

const Teammember = (props) => {
  return (
    
        <div className="card m-2" style={{ width: '18rem' }}>
                    <img src={props.object.url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.object.name}</h5>
                        <p className="card-text">{props.object.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
        </div>
   
  )
}

export default Teammember
