import React, { useEffect, useState } from 'react';

const Wishlist = () => {
  const [wishlist_list, setWishlistList] = useState(
    JSON.parse(localStorage.getItem('wishlist_list'))?.map(String) || []
  );
  const [final_wishlist, setFinalWishlist] = useState([]);

  useEffect(() => {
    const load_data = async () => {
      try {
        const response = await fetch('/plantarray.json');
        if (!response.ok) throw new Error("Could not fetch plant data.");

        const data = await response.json();
        
        // Filter data based on wishlist_list
        const filtered_data = data.filter((item) => wishlist_list.includes(String(item.id)));

        // Set the final_wishlist value with filtered data
        setFinalWishlist(filtered_data);

        console.log("Filtered Wishlist Data:", filtered_data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (wishlist_list.length > 0) {
      load_data();
    }
  }, [wishlist_list]);

  const remove_from_wishlist = (id) => {
    alert(id);
    const updatedWishlist = wishlist_list.filter(itemId => itemId !== String(id));
    localStorage.setItem('wishlist_list', JSON.stringify(updatedWishlist));
    setWishlistList(updatedWishlist);
  };

  const add_to_cart=(id)=>{
      const cart=JSON.parse(localStorage.getItem('add_to_cart_list'))?.map(String) || [];
      let updatedCart;
      if(cart.includes(String(id))){
          // already in cart
          alert("Item already in cart");
          updatedCart = cart.filter(itemId => itemId !== String(id));
      }else{
        alert("Item added in cart");
          updatedCart=[...cart, String(id)];
      }
      // const updatedCart = cart.includes(String(id)) ? cart.filter(itemId => itemId !== String(id))  // Remove if it exists
      //                    : [...cart, String(id)];  // Add if it does not exist
      //console.log(updatedCart);
      localStorage.setItem('add_to_cart_list',JSON.stringify(updatedCart));
      
  };

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center p-3 flex-wrap body-bg-color'>
      {final_wishlist.length > 0 ? (
  final_wishlist.map((obj, index) => (
    <div className="card m-3 body-bg-color" key={obj.id} style={{ width: "30rem",border:"1px solid #2b3c2c" }}>
      <h5 className="card-header body-dark-bg-color text-light">Wishlist</h5>
      <div className="card-body">
        <div className="card-container">
          <div className="image-container">
            <img src={"../" + obj.plant_url} alt={obj.plant_name} />
          </div>
          <div className="text-container">
            <h5 className="card-title body-text-color fw-bold fs-4">{obj.plant_name}</h5>
            <p className="card-text body-text-color">{obj.description}</p>
          </div>
        </div>

        <div className="mt-3 d-flex justify-content-center align-items-center">
          <button className="btn btn-light body-dark-bg-color  rounded-pill ps-5 pe-5" onClick={() => add_to_cart(obj.id)}><i className="bi bi-cart4 fs-5 text-light fw-bold"></i></button>
          <button className="btn bg-orange rounded-pill ps-5 pe-5  ms-3" onClick={() => remove_from_wishlist(obj.id)}><i className="fs-5 bi bi-bag-x-fill text-light fw-bold"></i></button>
        </div>
      </div>
    </div>
  ))
) : (
  // <div>
  //   <div className="alert alert-danger" role="alert">
  //     <strong>Your wishlist is empty!</strong> {/* Updated message */}
  //   </div>
  // </div>
  <img src="../empty-wishlist.png" alt="" style={{width:"500px",margin:"0 auto"}}/>
)}

      </div>
    </div>
  );
}

export default Wishlist;
