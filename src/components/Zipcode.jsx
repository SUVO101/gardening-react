import React , { useState } from 'react'
import { Link } from 'react-router-dom'

const Zipcode = ({onzipcodechange}) => {
    const  [zip, setZip] = useState('');

    const setzipcode =(e)=>{
        setZip(e.target.value);
        // if(onzipcodechange){
        //     onzipcodechange(e.target.value);
        // }
    };

  return (
    <div>
        <div className="">
                    <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
                    <div className="input-group">
                        <input type="text" value={zip} onChange={setzipcode} className="form-control" id="inlineFormInputGroupUsername" placeholder="Enter Your Zipcode..." />
                        <div className="input-group-text text-light" style={{backgroundColor:"#50B498",}}>
                            <Link to={`/plantchecker?zipcode=${zip}`}  className="text-light" style={{textDecoration:"none"}}>Check here</Link>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default Zipcode
