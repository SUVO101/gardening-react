import React, { useEffect, useState } from 'react';

const OrderSummary = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/plantarray.json');
        if (!response.ok) throw new Error("Could not fetch orders data.");
        
        const data = await response.json();
        const sampleOrderIds = ['1', '2', '3'];  // Sample IDs for testing
        const filteredData = data.filter(order => sampleOrderIds.includes(String(order.id)));
        setOrders(filteredData);
        setFilteredOrders(filteredData);
      } catch (error) {
        console.error("Error fetching orders data:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredOrders(
      orders.filter(order => order.plant_name.toLowerCase().includes(term))
    );
  };

  const openRatingModal = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const submitRating = () => {
    console.log(`Rated ${rating} stars for:`, selectedOrder);
    console.log("Feedback:", feedback);
    setShowModal(false);
    setRating(5);
    setFeedback('');
  };

  const handleStarClick = (star) => {
    setRating(star);
  };
  
  return (
    <div className="container pt-4 p-4 body-bg-color">
      
        <div className="d-flex justify-content-end">
            <div className="input-group mb-3 w-50">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Search your orders here"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <span className="input-group-text ps-4 pe-4 bg-orange text-light"><i className="bi bi-search fw-bold"></i></span>
            </div>
        </div>
      
      {filteredOrders.map(order => (
  <div key={order.id} className="card mt-3 body-bg-color" style={{border:"1px solid #2b3c2c"}}>
    <div className="row g-0 align-items-center p-3">
      <div className="col-md-2 col-4">
        <img src={"../" + order.plant_url} alt={order.plant_name} className="img-fluid" style={{ borderRadius: '8px' }} />
      </div>
      <div className="col-md-6 col-8 p-3">
        <div className="d-flex align-items-center justify-content-around">
            <h5 className="mb-1 body-text-color fw-bold">{order.plant_name}</h5>
            <p className="mb-1 body-text-color">₹{order.price}</p>
        </div>
      </div>
      <div className="col-md-4 text-md-end text-start p-3">
        <p className="text-dark mb-1 fw-bold"><i className="bi bi-check2-all pe-2 text-success fw-bold fs-4"></i> Delivered on 17sep 2024</p>
        <button className="btn body-dark-bg-color body-light-text-color" onClick={() => openRatingModal(order)}>
        <i className="bi bi-star-fill pe-2 fw-bold"></i> Rate & Review Product
        </button>
        <div>
                <i className="bi bi-star-fill ps-2 fw-bold text-warning"></i>
                <i className="bi bi-star-fill ps-2 fw-bold text-warning"></i>
                <i className="bi bi-star-fill ps-2 fw-bold text-warning"></i>
                <i className="bi bi-star-fill ps-2 fw-bold text-warning"></i>
                <i className="bi bi-star ps-2 fw-bold text-secondary"></i>
        </div>
      </div>
    </div>
  </div>
))}

      {/* Rating Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Rate & Review {selectedOrder?.title}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">Rate Product</label>
                      <div>
                        {[1, 2, 3, 4, 5].map(star => (
                          <i
                            key={star}
                            className={`bi ${star <= rating ? 'bi-star-fill text-warning' : 'bi-star text-secondary'} ps-2 fw-bold`}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleStarClick(star)}
                          ></i>
                        ))}
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Feedback</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                      ></textarea>
                    </div>
                  </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={submitRating}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
