import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Login= () =>{

  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  
const [formData, setFormData] = useState({

    customer_firstname: '',
   customer_email: '',
   customer_password:'',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMerchant();
  }

  const createMerchant = async () => {
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('customer_firstname', formData.customer_firstname);
      formData.append('customer_email', formData.customer_email);
      formData.append('customer_password', formData.customer_password);
      formData.append('file', file);
  
      const response = await axios.post(
        'http://localhost:3001/customerlogin_data',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      
      console.log(response);
      alert('Login successfully submitted');
      setError('');
    } catch (error) {
      console.error(error);
      alert('Error submitting login');
      setError('Internal Server Error');
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div> 
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" >
                  Name:
                  <input
                    type="text"
                    id="name"
                    className='inpl'
                    name="customer_firstname"
                    placeholder='Your Name'
                    value={formData.customer_firstname}
                    onChange={handleChange}
                    required
                    data-aos="fade-right"
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="email" >
                  Email:
                  <input
                    type="email"
                    id="email"
                    className='inpl'
                    name="customer_email"
                    placeholder='Your Name'
                    value={formData.customer_email}
                    onChange={handleChange}
                    required
                    data-aos="fade-right"
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="password" >
                  password:
                  <input
                    type="password"
                    id="password"
                    className='inpl'
                    name="customer_password"
                    placeholder='Your Name'
                    value={formData.customer_password}
                    onChange={handleChange}
                    required
                    data-aos="fade-right"
                  />
                </label>
              </div>
              <div className="form-group">
  <label htmlFor="file">File:</label>
  <input
    type="file"
    id="file"
    name="file"
    onChange={handleFileChange}
    required
    data-aos="fade-right"
  />
</div>

              <div className="form-group">
              <button type="submit" disabled={submitting} data-aos="fade-up">
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
                {error && <p>{error}</p>}
              </div>
              
            
            </form>

          </div>)}
export default Login;