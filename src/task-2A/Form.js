import React, { useState } from 'react';
import './Form.css';

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
    <form onSubmit={handleSubmit} className='container'>
      <div className='wrapper'>
        <label className='firstName'>
          First Name<br />
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label className='lastName'>
          Last Name<br />
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      <div className='selectWrapper'>
        <select value={selectedOption} onChange={handleChange}>
          <option value="">Choose option</option>
          <option value="number">Phone Number</option>
          <option value="email">Email Address</option>
        </select>
        {selectedOption === 'number' && (
          <div>
            <label style={{ margin: "20px" }}>Phone Number</label>
            <input
              type='number'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        )}
        {selectedOption === 'email' && (
          <div>
            <label style={{ margin: "20px" }}>Email Address</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}
        {isFormComplete === false && (
          <p style={{ color: 'red' }}>Please fill all details.</p>
        )}
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}

export default Form;
