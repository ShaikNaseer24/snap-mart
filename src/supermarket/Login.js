import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    customer_firstname: '',
    customer_email: '',
    customer_password: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform form validation
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      createMerchant();
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const validationErrors = {};

    if (formData.customer_firstname.trim() === '') {
      validationErrors.customer_firstname = '* Please enter your name';
    }else if (formData.customer_firstname.length < 3) {
      validationErrors.customer_firstname = 'FullName must be at least 3 characters long';
    }

    if (formData.customer_email.trim() === '') {
      validationErrors.customer_email = '* Please enter your email';
    }

    if (formData.customer_password.trim() === '') {
      validationErrors.customer_password = '* Please enter your password';
    }else if (formData.customer_password.length < 8) {
      validationErrors.customer_password = ' *Password must be at least 8 characters long';
    }
    return validationErrors;
  };

  const createMerchant = async () => {
    setSubmitting(true);
    try {
      const response = await axios.post('http://localhost:3001/customerlogin_data', formData);
      console.log(response);
      alert('Login Successfully Submitted');
      setErrors({});
    } catch (error) {
      console.error(error);
      alert('Error submitting login');
      setErrors({ serverError: 'Internal Server Error' });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div>
      <section class="background-radial-gradient overflow-hidden">
    
    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-2">
    <h3 className=" display-3 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
    Registration Form
          </h3>
      <div class="row gx-lg-5 align-items-center mb-5">
        
        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
          
          <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
            The best offer <br />
            <span style={{ color: 'hsl(218, 81%, 75%)' }}>
              for your business
            </span>

          </h1>
          <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
             Content 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, expedita iusto veniam atque, magni tempora mollitia
            dolorum consequatur nulla, neque debitis eos reprehenderit quasi
            ab ipsum nisi dolorem modi. Quos?
          </p>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
         
          <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

          <div class="card bg-glass " >
         <br></br>
          <label >&nbsp;&nbsp; Please Fill The Form <span class="text-danger">*</span></label>
            <div class="card-body px-1 py-5 px-md-5">
              <form onSubmit={handleSubmit} >     
              <div class="row">
               <div class="col-md-12 mb-12"> 
                    <div class="form-outline mb-4">
                    <label class="form-label text-dark"htmlFor="name"  for="form3Example1">Full Name <span class="text-danger">*</span></label>
                      <input type="text"  class="form-control"id="name" className='inpl'
                  name="customer_firstname"
                  placeholder='Enter Your Name'
                  value={formData.customer_firstname}
                  onChange={handleChange}
                 
                  data-aos="fade-right"/>  
                        {errors.customer_firstname && <p className="text-danger">{errors.customer_firstname}</p>}  
                     </div>
                <div class="form-outline mb-4">
                <label class="form-label text-dark"  htmlFor="email"for="form3Example3">Email address <span class="text-danger">*</span></label>
                  <input type="email"  id="email" className='inpl'
                  name="customer_email"
                  placeholder='Enter Your Email'
                  value={formData.customer_email}                  
                  data-aos="fade-right"  
          onChange={handleChange}class="form-control" />   
            {errors.customer_email && <p className="text-danger">{errors.customer_email}</p>}                
                </div>
           <div class="form-outline mb-4">
                <label  htmlFor="password" class="form-label text-dark" for="form3Example4">Password <span class="text-danger">*</span></label>
                  <input type="password"  class="form-control"  id="password"
                  className='inpl'
                  name="customer_password"
                  placeholder='Enter Your Password'
                  value={formData.customer_password}
                  onChange={handleChange}
                  data-aos="fade-right"/>
                     {errors.customer_password && <p className="text-danger">{errors.customer_password}</p>} 
                 </div>
                <button type="submit"  className='A'class="btn  btn-block col-md-12 " disabled={submitting} data-aos="fade-up">
                {submitting ? 'Submitting...' : 'Submit'} Login
                </button> 
                
        {errors.serverError && <p className="text-danger">{errors.serverError}</p>}
            
                </div></div>        
              </form>
              </div>
          </div>
           </div>
           <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div></div>
    </div>
  </section>
    </div>

  );
};

export default Login;


