import React, { useState, useEffect } from 'react';
import RecomendPlantCardComponent from '../components/RecomendPlantCardComponent';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import LoginSignupModal from './LoginSignupModal';
import Header from '../components/Header';


//old
const PlantChecking = (props) => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [plantData, setPlantData] = useState(null); // State to hold plantData
  const [zipcode, setZipcode] = useState('');
  const [zip, setZip] = useState('');
  const {id}=useParams();
 
  
  const Recomendedarray = [
    {
      id: 1,
      plant_url: "rose2.png",
      plant_name: "Rose",
    },
    {
      id: 2,
      plant_url: "sunflower2.png",
      plant_name: "Sunflower",
    },
    {
      id: 3,
      plant_url: "tulip2.png",
      plant_name: "Tulip",
    },
    {
      id: 7,
      plant_url: "mango2.png",
      plant_name: "Mango",
    }
  ];

  const getzipcode = (value) => {
    setZipcode(value);
    console.log(value);
  };


  useEffect(()=>{
    const fetchPlantData = async () => {
      const response = await fetch(`/plantarray.json`);
      if (!response.ok) {
        throw new Error("Could not fetch plant data.");
      }
      const data = await response.json(); // Parse JSON response
      // Find the specific plant by id
      const plantData = data.find((plant) => plant.id === parseInt(id));
      if (plantData) {
        setPlantData(plantData); // Set the found plant to state
      } else {
        throw new Error("Plant not found.");
      }
    }
    fetchPlantData(); // Call the fetch function
  },[id])

  // Retrieve zipcode from the URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const zip = params.get('zipcode');
    if (zip) {
      setZipcode(zip);
      console.log(`url zip: ${zip}`);
    }
  }, [location.search]);

  const recomend_plant_click=(plant_id)=>{
    console.log(plant_id);
    navigate(`/plantchecker/${plant_id}`);
  }


  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [showModal, setShowModal] = useState(false);
  const [add_to_cart_list,setAdd_to_cart_list]=useState([]);
  const [add_to_wishlist_list,setAdd_to_wishlist_list]=useState([]);

  const [pageopen,setpageopen]=useState(false);

  // const [islogin,setislogin]=useState(JSON.parse(localStorage.getItem('isLoggedIn'))||false);

 // Load lists from localStorage on component mount
 useEffect(() => {
  const storedCartList = JSON.parse(localStorage.getItem('add_to_cart_list'));
  const storedWishlistList = JSON.parse(localStorage.getItem('wishlist_list'));

  if (storedCartList) {
    setAdd_to_cart_list(storedCartList); // Load cart list from localStorage
  }
  
  if (storedWishlistList) {
    setAdd_to_wishlist_list(storedWishlistList); // Load wishlist from localStorage
  }
}, []);

  const add_to_cart = () => {
    if (!isLoggedIn) {
      // means user not log-in
      setShowModal(true); 
      setpageopen(true);
      
      
    } else {
      console.log("User is already logged in. Proceed with action.");
      //setAdd_to_cart_list((prevList) => [...prevList, id]); // Append id to the previous list
      //localStorage.setItem('add_to_cart_list', JSON.stringify([...add_to_cart_list, id])); // Store updated list in localStorage
      if (!add_to_cart_list.includes(id)) {
        // Add the id to the list since it doesn't exist
        const updatedCartList = [...add_to_cart_list, id];
        setAdd_to_cart_list(updatedCartList); // Update the state with the new cart list
        localStorage.setItem('add_to_cart_list', JSON.stringify(updatedCartList)); // Update local storage
        alert(`Added plant with ID ${id} to the cart.`);
      } else {
        alert(`Plant with ID ${id} is already in the cart.`);
      }
    }
  };

  const add_to_wishlist=()=>{
   // console.log();
   if(!isLoggedIn){
    // means user not log-in
      setShowModal(true);
      setpageopen(true);
   }
   else{
      // means user log-in
      if(!add_to_wishlist_list.includes(id)){
        //means add  to wishlist list
        const updated_wishlist=[...add_to_wishlist_list,id];
        setAdd_to_wishlist_list(updated_wishlist);
        localStorage.setItem('wishlist_list',JSON.stringify(updated_wishlist));
        alert(`Added plant with ID ${id} to the Wishlist.`);
      }else{
        // alredy added
        alert(`Plant with ID ${id} is already in the Wishlist.`);
      }
   }
    
  }

  const handleLoginSuccess = (status) => {
    setIsLoggedIn(status);
    setShowModal(false);
    // setislogin(true);
    if (status) {
      localStorage.setItem('isLoggedIn', 'true'); // Update localStorage on successful login
    }
  };

  return (
    <>
    <Header />
    <div className='container body-bg-color'>
      
      <div className="row">
        <div className="col-md-5 p-3">
          {plantData ? (
            <>
              <img src={"../" + plantData.plant_url} className="img-fluid" alt="..." style={{ width: "100%", height: "400px", borderRadius: "10px" }} />
              <h3 className="my-2 body-dark-bg-color body-text-color p-3 text-light">Plant Name: {plantData.plant_name}</h3>
              <div className="rounded p-3 text-success">
                <h4 className='body-text-color fw-bold fs-3'>Description</h4>
                <p className='body-text-color'>{plantData.description}</p>
              </div>
            </>
          ) : (
            <p>Loading plant data...</p>
          )}
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6 p-3">
          
		              <div className="">
                    <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
                    <div className="input-group">
                        <input type="number" value={zip} onChange={(e) => setZip(e.target.value)} className="form-control" id="inlineFormInputGroupUsername" placeholder="Enter Your Zipcode..." />
                        <div className="input-group-text text-light" style={{backgroundColor:"#2b3c2c",cursor:"pointer"}} onClick={()=>setZipcode(zip)}>
                            Check here
                        </div>
                  </div>
        	</div>

          {zipcode && zipcode.length === 6 ? (
            <div className="mt-3">

              <button className='btn btn-light fw-bold text-primary mb-3' onClick={add_to_cart}><i className="bi bi-cart4 pe-2"></i>Add to Cart</button>
              <button className='btn btn-light fw-bold text-danger mb-3 ms-4' onClick={add_to_wishlist}><i className="bi bi-bag-heart-fill pe-2"></i>Wishlist</button>
              {<LoginSignupModal onLoginChange={handleLoginSuccess} page_open={pageopen} />}

              <div className="alert alert-success" role="alert">
                <i className="bi bi-check-circle-fill body-text-color"></i> This plant is suitable for your environment.
              </div>
              <div className="p-3 bg-highlight-success rounded body-text-color">
                <h3>To grow this plant you need</h3>
                <ul>
                  <li>Climate</li>
                  <li>Soil Type</li>
                  <li>Soil Preparation</li>
                  <li>Weather</li>
                  <li>Etc</li>
                </ul>
              </div>

              <h3 className='mt-3 body-text-color fw-bold'>Plant Recommendation</h3>
              <div className="p-0 m-0">
                <div className="d-flex" style={{ overflowX: "scroll" }}>
                  {Recomendedarray.map((plant, index) => (
                    <RecomendPlantCardComponent plantobj={plant} key={index} onClick={()=>recomend_plant_click(plant.id)}/>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className='text-danger fw-bold p-1'>
                { zipcode!='' && zipcode.length !==6 ? 'Zipcode Must be 6 letters.' : ''}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default PlantChecking;
// old one
