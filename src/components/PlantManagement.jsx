import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const PlantManagement = () => {
  const [activeTab, setActiveTab] = useState('managePlants');
  const [plants, setPlants] = useState(() => {
    const savedPlants = localStorage.getItem('plants');
    return savedPlants ? JSON.parse(savedPlants) : [];
  });
  const [plant, setPlant] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    climate: '',
    soilType: '',
    soilPreparation: '',
    weather: '',
    image: ''
  });
  const [viewPlant, setViewPlant] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const categories = ['Indoor', 'Outdoor', 'Flowering', 'Non-Flowering'];
  const climates = ['Tropical', 'Temperate', 'Arid', 'Cold'];
  const soilTypes = ['Sandy', 'Clay', 'Loamy', 'Peaty'];
  const weathers = ['Sunny', 'Rainy', 'Cloudy'];

  // Placeholder stats for demonstration
  const ecomStats = {
    totalSales: 10000,
    totalOrders: 150,
    bestSellingPlant: 'Rose'
  };

  const orderStats = {
    totalOrders: 150,
    completed: 120,
    pending: 30,
    cancelled: 5,
    orders: [
      { id: 1, name: 'Rose', status: 'Completed' },
      { id: 2, name: 'Tulip', status: 'Pending' },
      { id: 3, name: 'Lily', status: 'Cancelled' },
      { id: 4, name: 'Orchid', status: 'Completed' },
      // Add more orders here
    ]
  };

  useEffect(() => {
    localStorage.setItem('plants', JSON.stringify(plants));
  }, [plants]);

  // Define pie chart data
  const orderData = {
    labels: ['Completed', 'Pending', 'Cancelled'],
    datasets: [
      {
        data: [orderStats.completed, orderStats.pending, orderStats.cancelled],
        backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
      }
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setPlants(plants.map(p => (p.id === plant.id ? plant : p)));
    } else {
      setPlants([...plants, { ...plant, id: Date.now() }]);
    }
    resetForm();
  };

  const resetForm = () => {
    setPlant({
      name: '',
      description: '',
      price: 0,
      stock: 0,
      category: '',
      climate: '',
      soilType: '',
      soilPreparation: '',
      weather: '',
      image: ''
    });
    setIsEditing(false);
  };

  const handleEdit = (id) => {
    const selectedPlant = plants.find(p => p.id === id);
    setPlant(selectedPlant);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setPlants(plants.filter(p => p.id !== id));
  };

  const handleView = (plant) => {
    setViewPlant(plant);
  };

  const handleCloseView = () => {
    setViewPlant(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPlant({ ...plant, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCloseEdit = () => {
    resetForm();
  };

  return (
    <div className="container mt-4">
      {/* Tab Navigation */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'managePlants' ? 'active' : ''}`} onClick={() => setActiveTab('managePlants')} href="#!">Manage Plants</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'plantList' ? 'active' : ''}`} onClick={() => setActiveTab('plantList')} href="#!">Plant List</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'ecomStats' ? 'active' : ''}`} onClick={() => setActiveTab('ecomStats')} href="#!">E-commerce Stats</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'orderStats' ? 'active' : ''}`} onClick={() => setActiveTab('orderStats')} href="#!">Order Stats</a>
        </li>
      </ul>

      {/* Order Stats Tab */}
      {activeTab === 'orderStats' && (
        <div className="card mb-4">
          <div className="card-header">
            <h5>Order Stats</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                    <p><strong>Total Orders:</strong> {orderStats.totalOrders}</p>
                    <p><strong>Completed Orders:</strong> {orderStats.completed}</p>
                    <p><strong>Pending Orders:</strong> {orderStats.pending}</p>
                    <p><strong>Cancelled Orders:</strong> {orderStats.cancelled}</p>
              </div>
              <div className="col-md-6">
                    {/* Pie Chart */}
                  <div className="card w-100 body-bg-color p-4">
                    <Pie data={orderData} />
                  </div>
              </div>
            </div>
    
            {/* Order Status Table */}
            <h6>Order Details</h6>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Plant Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orderStats.orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.name}</td>
                    <td>{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {activeTab === 'managePlants' && (
        <div className="card mb-4">
          <div className="card-header">
            <h5>{isEditing ? 'Edit Plant' : 'Add Plant'}</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Plant Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={plant.name}
                    onChange={(e) => setPlant({ ...plant, name: e.target.value })}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Upload Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  value={plant.description}
                  onChange={(e) => setPlant({ ...plant, description: e.target.value })}
                  required
                ></textarea>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Price ($)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={plant.price}
                    onChange={(e) => setPlant({ ...plant, price: parseFloat(e.target.value) })}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Stock</label>
                  <input
                    type="number"
                    className="form-control"
                    value={plant.stock}
                    onChange={(e) => setPlant({ ...plant, stock: parseInt(e.target.value) })}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">Category</label>
                  <select
                    className="form-select"
                    value={plant.category}
                    onChange={(e) => setPlant({ ...plant, category: e.target.value })}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Climate</label>
                  <select
                    className="form-select"
                    value={plant.climate}
                    onChange={(e) => setPlant({ ...plant, climate: e.target.value })}
                    required
                  >
                    <option value="">Select Climate</option>
                    {climates.map((climate) => (
                      <option key={climate} value={climate}>{climate}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Soil Type</label>
                  <select
                    className="form-select"
                    value={plant.soilType}
                    onChange={(e) => setPlant({ ...plant, soilType: e.target.value })}
                    required
                  >
                    <option value="">Select Soil Type</option>
                    {soilTypes.map((soil) => (
                      <option key={soil} value={soil}>{soil}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Soil Preparation</label>
                <textarea
                  className="form-control"
                  value={plant.soilPreparation}
                  onChange={(e) => setPlant({ ...plant, soilPreparation: e.target.value })}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Weather</label>
                <select
                  className="form-select"
                  value={plant.weather}
                  onChange={(e) => setPlant({ ...plant, weather: e.target.value })}
                  required
                >
                  <option value="">Select Weather</option>
                  {weathers.map((weather) => (
                    <option key={weather} value={weather}>{weather}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">{isEditing ? 'Update Plant' : 'Add Plant'}</button>
              {isEditing && <button type="button" className="btn btn-secondary ms-2" onClick={resetForm}>Cancel</button>}
            </form>
          </div>
        </div>
      )}

      {activeTab === 'plantList' && (
        <div className="card mb-4">
          <div className="card-header">
            <h5>Plant List</h5>
          </div>
          <div className="card-body">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {plants.map((p) => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>${p.price.toFixed(2)}</td>
                    <td>{p.stock}</td>
                    <td>
                      <button onClick={() => handleView(p)} className="btn btn-info btn-sm me-1" title="View">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button onClick={() => handleEdit(p.id)} className="btn btn-warning btn-sm me-1" title="Edit">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button onClick={() => handleDelete(p.id)} className="btn btn-danger btn-sm" title="Delete">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'ecomStats' && (
        <div className="card mb-4">
          <div className="card-header">
            <h5>E-commerce Stats</h5>
          </div>
          <div className="card-body">
            <p><strong>Total Sales:</strong> ${ecomStats.totalSales}</p>
            <p><strong>Total Orders:</strong> {ecomStats.totalOrders}</p>
            <p><strong>Best Selling Plant:</strong> {ecomStats.bestSellingPlant}</p>
          </div>
        </div>
      )}
      {viewPlant && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{viewPlant.name}</h5>
                <button type="button" className="btn-close" onClick={handleCloseView}></button>
              </div>
              <div className="modal-body">
                {viewPlant.image && <img src={viewPlant.image} alt={viewPlant.name} className="img-fluid mb-3" />}
                <p><strong>Description:</strong> {viewPlant.description}</p>
                <p><strong>Price:</strong> ${viewPlant.price.toFixed(2)}</p>
                <p><strong>Stock:</strong> {viewPlant.stock}</p>
                <p><strong>Category:</strong> {viewPlant.category}</p>
                <p><strong>Climate:</strong> {viewPlant.climate}</p>
                <p><strong>Soil Type:</strong> {viewPlant.soilType}</p>
                <p><strong>Soil Preparation:</strong> {viewPlant.soilPreparation}</p>
                <p><strong>Weather:</strong> {viewPlant.weather}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseView}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isEditing && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Plant</h5>
                <button type="button" className="btn-close" onClick={handleCloseEdit}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Plant Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={plant.name}
                        onChange={(e) => setPlant({ ...plant, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Upload Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        className="form-control"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      value={plant.description}
                      onChange={(e) => setPlant({ ...plant, description: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Price ($)</label>
                      <input
                        type="number"
                        className="form-control"
                        value={plant.price}
                        onChange={(e) => setPlant({ ...plant, price: parseFloat(e.target.value) })}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Stock</label>
                      <input
                        type="number"
                        className="form-control"
                        value={plant.stock}
                        onChange={(e) => setPlant({ ...plant, stock: parseInt(e.target.value) })}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label className="form-label">Category</label>
                      <select
                        className="form-select"
                        value={plant.category}
                        onChange={(e) => setPlant({ ...plant, category: e.target.value })}
                        required
                      >
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Climate</label>
                      <select
                        className="form-select"
                        value={plant.climate}
                        onChange={(e) => setPlant({ ...plant, climate: e.target.value })}
                        required
                      >
                        <option value="">Select Climate</option>
                        {climates.map((climate) => (
                          <option key={climate} value={climate}>{climate}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Soil Type</label>
                      <select
                        className="form-select"
                        value={plant.soilType}
                        onChange={(e) => setPlant({ ...plant, soilType: e.target.value })}
                        required
                      >
                        <option value="">Select Soil Type</option>
                        {soilTypes.map((soil) => (
                          <option key={soil} value={soil}>{soil}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Soil Preparation</label>
                    <textarea
                      className="form-control"
                      value={plant.soilPreparation}
                      onChange={(e) => setPlant({ ...plant, soilPreparation: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Weather</label>
                    <select
                      className="form-select"
                      value={plant.weather}
                      onChange={(e) => setPlant({ ...plant, weather: e.target.value })}
                      required
                    >
                      <option value="">Select Weather</option>
                      {weathers.map((weather) => (
                        <option key={weather} value={weather}>{weather}</option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">Update Plant</button>
                  <button type="button" className="btn btn-secondary ms-2" onClick={handleCloseEdit}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantManagement;

