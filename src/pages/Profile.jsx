import React, { useState, useEffect } from 'react';
import './Profile.css';

const ProfilePage = () => {
  const [step, setStep] = useState(0);
  const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(()=>{
    if(localStorage.getItem('basicInfo') && localStorage.getItem('orderAddress')){
      setStep(2);
    }else{
      setStep(0);
    }
  },[]);

  // Fetch user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem('user')) || {};
  const storedBasicInfo = JSON.parse(localStorage.getItem('basicInfo')) || {};
  const storedOrderAddress = JSON.parse(localStorage.getItem('orderAddress')) || {};

  const [userData, setUserData] = useState({
    name: storedUser.name || '',
    email: storedUser.email || ''
  });

  const [basicInfo, setBasicInfo] = useState({
    gender: storedBasicInfo.gender || '',
    country: storedBasicInfo.country || '',
    state: storedBasicInfo.state || '',
    zipcode: storedBasicInfo.zipcode || '',
    address: storedBasicInfo.address || '',
    phone: storedBasicInfo.phone || ''
  });

  const [orderAddress, setOrderAddress] = useState({
    country: storedOrderAddress.country || '',
    state: storedOrderAddress.state || '',
    zipcode: storedOrderAddress.zipcode || '',
    address: storedOrderAddress.address || '',
    address2: storedOrderAddress.address2 || '',
    phone: storedOrderAddress.phone || ''
  });

  const [sameAsBasic, setSameAsBasic] = useState(false);

  useEffect(() => {
    setProfilePhoto(`https://api.dicebear.com/9.x/initials/svg?seed=${userData.name}&radius=50&size=96`);
  }, [userData.name]);

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);
  console.log(step);
  

  const handleBasicInfoChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderAddressChange = (e) => {
    const { name, value } = e.target;
    setOrderAddress((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (sameAsBasic) {
      setOrderAddress({
        ...basicInfo,
        address2: '',
        phone: basicInfo.phone
      });
    }
  }, [sameAsBasic, basicInfo]);

  const saveInfoToLocalStorage = () => {
    //localStorage.setItem('user', JSON.stringify(userData));
    setStep(2);
    localStorage.setItem('basicInfo', JSON.stringify(basicInfo));
    localStorage.setItem('orderAddress', JSON.stringify(orderAddress));
    alert('Information saved to localStorage.');
  };

  return (
    <div className="p-4 container body-bg-color">
      
      
      {/* Stepper */}
      <div className="row p-3 mb-3">
           <h2 className="text-center col-md-6 body-text-color fs-2 fw-bold">Profile Page</h2>
           <div className="d-flex justify-content-center align-items-center stepper-container-unique  col-md-6">
                <div className={`step-unique ${step >= 1 ? 'completed-unique' : ''}`}>
                  {step >= 1 ? '✓' : '1'}
                </div>
                <div className="line-unique"></div>
                <div className={`step-unique ${step === 2 ? 'completed-unique' : ''}`}>
                  {step >= 2 ? '✓' : '2'}
                </div>
           </div>
      </div>
      

      {/* Section 1: Basic Information */}
      {step%2 === 0 && (
        <div className=" p-4 row body-text-color">
          <h4 className='body-text-color fw-bold'>Basic Information</h4>
          <hr className='p-3 mb-5'/>
          <div className="text-center mb-4 col-md-2">
            {profilePhoto && <img src={profilePhoto} alt="Profile" className="rounded-circle profile-photo" />}
          </div>
          <div className="mb-3 col-md-3">
            <label>Name:</label>
            <input type="text" className="form-control" value={userData.name} disabled />
          </div>
          <div className="mb-3  col-md-4">
            <label>Email:</label>
            <input type="email" className="form-control" value={userData.email} disabled />
          </div>
          <div className="mb-3 col-md-3">
            <label>Gender:</label>
            <select
              className="form-control"
              name="gender"
              value={basicInfo.gender}
              onChange={handleBasicInfoChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-3 col-md-3">
            <label>Country:</label>
            <input type="text" className="form-control" name="country" value={basicInfo.country} onChange={handleBasicInfoChange} />
          </div>
          <div className="mb-3 col-md-3">
            <label>State:</label>
            <input type="text" className="form-control" name="state" value={basicInfo.state} onChange={handleBasicInfoChange} />
          </div>
          <div className="mb-3 col-md-3">
            <label>Zipcode:</label>
            <input type="text" className="form-control" name="zipcode" value={basicInfo.zipcode} onChange={handleBasicInfoChange} />
          </div>
          <div className="mb-3 col-md-3">
            <label>Phone:</label>
            <input type="text" className="form-control" name="phone" value={basicInfo.phone} onChange={handleBasicInfoChange} />
          </div>
          {/* <div className="mb-3">
            <label>Address:</label>
            <input type="text" className="form-control" name="address" value={basicInfo.address} onChange={handleBasicInfoChange} />
          </div> */}
          <div className="mb-3">
            <label>Address:</label>
            <textarea row="3" className="form-control" name="address" value={basicInfo.address} onChange={handleBasicInfoChange} />
          </div>
          
          <div className='d-flex justify-content-center align-items-center'>
            <button className="btn bt-bgcolor body-light-text-color w-50 fw-bold" onClick={handleNextStep}>Next</button>
          </div>
        </div>
      )}

      {/* Section 2: Order Address */}
      {step%2 === 1 && (
        <div className="border p-4 rounded row">
          <h4 className='body-text-color fw-bold'>Order Address</h4>
          <div className="form-check mb-3 ms-3">
            <input className="form-check-input" type="checkbox" checked={sameAsBasic} onChange={() => setSameAsBasic(!sameAsBasic)} />
            <label className="form-check-label">Same as Basic Information</label>
          </div>
          <div className="mb-3 col-md-3">
            <label>Country:</label>
            <input type="text" className="form-control" name="country" value={orderAddress.country} onChange={handleOrderAddressChange} />
          </div>
          <div className="mb-3 col-md-3">
            <label>State:</label>
            <input type="text" className="form-control" name="state" value={orderAddress.state} onChange={handleOrderAddressChange} />
          </div>
          <div className="mb-3 col-md-3">
            <label>Zipcode:</label>
            <input type="text" className="form-control" name="zipcode" value={orderAddress.zipcode} onChange={handleOrderAddressChange} />
          </div>
          <div className="mb-3 col-md-3">
            <label>Phone:</label>
            <input type="text" className="form-control" name="phone" value={orderAddress.phone} onChange={handleOrderAddressChange} />
          </div>
          <div className="mb-3">
            <label>Address:</label>
            <textarea className="form-control" name="address" value={orderAddress.address} onChange={handleOrderAddressChange} />
          </div>
          <div className="mb-3">
            <label>Address 2 (Optional):</label>
            <textarea className="form-control" name="address2" value={orderAddress.address2} onChange={handleOrderAddressChange} />
          </div>
          <div className="d-flex align-items-center justify-content-between">
              <button className="btn border btn-light body-text-color w-25 fw-bold" onClick={handlePreviousStep}>Back</button>
              <button className="btn bt-bgcolor body-light-text-color w-25 fw-bold" onClick={saveInfoToLocalStorage}> {userData.name ? 'Update' : 'Save'}
              </button>
          </div>
            
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
