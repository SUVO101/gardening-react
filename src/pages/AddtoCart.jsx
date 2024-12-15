import React, { useEffect, useState } from 'react';
import RazorpayButton from './RazorpayButton';

const AddtoCart = () => {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem('add_to_cart_list')) || []
  );
  const [plants, setPlants] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('/plantarray.json');
        if (!response.ok) throw new Error("Could not fetch plant data.");

        const data = await response.json();

        // Filter plants to include only those in the cart list
        const filteredPlants = data.filter(plant => cartList.includes(String(plant.id)));

        // Set initial quantities based on localStorage, defaulting to 1 if not specified
        const initialQuantities = filteredPlants.reduce((acc, plant) => {
          acc[plant.id] = quantities[plant.id] || 1;
          return acc;
        }, {});

        setPlants(filteredPlants);
        setQuantities(initialQuantities);
        calculateTotal(filteredPlants, initialQuantities);
      } catch (error) {
        console.error("Error fetching plant data:", error);
      }
    };

    fetchPlants();
  }, [cartList]);

  const calculateTotal = (plants, quantities) => {
    const totalAmount = plants.reduce(
      (acc, plant) => acc + (plant.price * (quantities[plant.id] || 1)),
      0
    );
    setTotal(totalAmount);
  };

  const handleQuantityChange = (id, increment) => {
    const newQuantities = { ...quantities };
    newQuantities[id] = increment
      ? (newQuantities[id] || 1) + 1
      : Math.max((newQuantities[id] || 1) - 1, 1);

    setQuantities(newQuantities);
    calculateTotal(plants, newQuantities);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartList.filter(itemId => itemId !== String(id));
    setCartList(updatedCart);
    localStorage.setItem('add_to_cart_list', JSON.stringify(updatedCart));

    const updatedPlants = plants.filter(plant => plant.id !== id);
    setPlants(updatedPlants);

    const newQuantities = { ...quantities };
    delete newQuantities[id];
    setQuantities(newQuantities);
    calculateTotal(updatedPlants, newQuantities);
  };

  // Sync cartList to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('add_to_cart_list', JSON.stringify(cartList));
  }, [cartList]);


  const [wishlist_list,setwishlist_list]=useState(JSON.parse(localStorage.getItem('wishlist_list'))||[]);
  const add_to_wishlist=(id)=>{
      console.log(wishlist_list);
      if(wishlist_list.includes(String(id))){
        alert('Plant already in Your Wishlist.');
      }else{
        const updated_wishlist=[...wishlist_list,String(id)];
        setwishlist_list(updated_wishlist);
        localStorage.setItem('wishlist_list',JSON.stringify(updated_wishlist));
        alert('Plant added in Your Wishlist.');
      }
  }

  return (
    <div className="container pt-4 body-bg-color">
      <div className="row">
        {/* Cart Items Section */}
        <div className="col-md-8">
          {plants.map((plant) => (
            <div key={plant.id} className="card mb-3 body-bg-color" style={{border:"1px solid #2b3c2c"}}>
              <div className="card-body d-flex">
                <img
                  src={`../${plant.plant_url}`}
                  alt={plant.plant_name}
                  className="img-fluid"
                  style={{ maxWidth: '150px', maxHeight: '150px', borderRadius: "50%", marginRight: '20px' }}
                />
                <div className="flex-grow-1">
                  <h5 className='body-text-color fw-bold fs-4'>{plant.plant_name}</h5>
                  <p className="body-text-color fw-bold">Price: ₹{plant.price}</p>
                  <div className="d-flex align-items-center">
                    <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange(plant.id, false)}>-</button>
                    <span className="mx-2">{quantities[plant.id]}</span>
                    <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange(plant.id, true)}>+</button>
                  </div>
                  <div className='d-flex justify-content-end align-items-center mt-4'>
                       <button className="btn btn-light me-3 text-danger fw-bold" onClick={() => removeFromCart(plant.id)}><i className="bi bi-trash3-fill fs-5 "></i> Remove</button>
                       <button className="btn btn-light text-primary fw-bold" onClick={() => add_to_wishlist(plant.id)}><i className="bi bi-bag-heart-fill fs-5"></i> Add Wishlist</button>
                  </div>
                  
                </div>
                <p className="text-end fw-bold fs-4 fs-md-6 orange-text-color">₹{plant.price * (quantities[plant.id] || 1)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        { cartList.length>0 ? ( <div className="col-md-4 mb-4">
          <div className="card body-bg-color" style={{border:"1px solid #2b3c2c"}}>
            <div className="card-header body-dark-bg-color text-light">Price Details</div>
            <div className="card-body">
              <p className="d-flex justify-content-between">
                <span>Price ({plants.length} items)</span>
                <span>₹{total}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Discount</span>
                <span>- ₹99</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Coupons</span>
                <span>- ₹96</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Platform Fee</span>
                <span>₹3</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Delivery Charges</span>
                <span>Free</span>
              </p>
              <hr />
              <h5 className="d-flex justify-content-between">
                <span>Total Amount</span>
                <span>₹{total - 99 - 96 + 3}</span>
              </h5>
              <p className="text-success">You will save ₹192 on this order</p>
              {/* <button className="btn btn-warning w-100">Place Order</button> */}
              <RazorpayButton/>
            </div>
          </div>
        </div>) : (
          // <div className="alert alert-danger text-center fw-bold" role="alert">
          //     Your Cart is Empty
          // </div>
          <img src="../empty-cart.png" alt="" style={{width:"500px",margin:"0 auto"}}/>
        )}
      </div>
    </div>
  );
};

export default AddtoCart;
