import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedOption && firstName && lastName && (selectedOption === 'number' ? phoneNumber : email)) {
      setIsFormComplete(true);
      console.log('Form submitted:', {
        selectedOption,
        firstName,
        lastName,
        phoneNumber,
        email,
      });

      setSelectedOption('');
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setEmail('');
    } else {
      setIsFormComplete(false);
    }
  };

  return (
    <div className="container">
      <div className='row'>
        <div className="card mt-5">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className="col-md-6 mt-2">
                <label for='firstName' className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id='firstName'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
                <div className="col-md-6 mt-2">
                  <label for="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id='lastName'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                </div>
              <div className="row">
                <div className='col-md-6 mt-2'>
                  <h5>How should we contact you?</h5>
                  <select className="form-select" value={selectedOption} onChange={handleChange}>
                  <option value="">Choose option</option>
                  <option value="number">Phone Number</option>
                  <option value="email">Email Address</option>
                </select>
                </div>
                
                  {selectedOption === 'number' && (
                    <div className="col-md-6">
                      <label className="form-label mt-2">Phone Number</label>
                      <input
                        type="number"
                        className="form-control"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  )}
                  {selectedOption === 'email' && (
                    <div className="col-md-6">
                      <label className="form-label mt-2">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  )}
                </div>

                  {isFormComplete === false && (
                    <p className="text-danger mt-2">Please fill all details.</p>
                  )}
                <button type="submit" className="btn btn-primary mt-1">Submit</button>
          
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
