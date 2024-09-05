import React from 'react'

const Teammember = (props) => {
  return (

    <div className="card m-2 p-3" style={{ width: '15rem', background: "transparent" }}>
      <img src={props.object.url} className="card-img-top img-fluid mx-auto" alt="..." style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
      <div className="card-body">
        <h5 className="card-title text-center">{props.object.name}</h5>
        <p className="card-text text-center">{props.object.description}</p>
        <div className="d-flex">
          <a href="#" className="btn btn-success mx-auto">Go somewhere</a>
        </div>
      </div>
    </div>

  )
}

export default Teammember
