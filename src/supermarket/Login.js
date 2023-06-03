import React, { Component } from 'react'

export default class Login extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {}
    };
  }
 

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = this.state;


    const validationErrors = {};
    if (name.trim() === '') {
      validationErrors.name = '*Full Name is required';
    }else if (name.length < 3) {
      validationErrors.name = 'FullName must be at least 3 characters long';
    }
    if (email.trim() === '') {
      validationErrors.email = '*Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (password.trim() === '') {
      validationErrors.password = '*Password is required';
    } else if (password.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters long';
    }
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      return;
    }

    
    alert(this.state.name+ "..Your Registration is completed");


    this.setState({
      name: '',
      email: '',
      password: '',
      errors: {}
    });
  };
    
  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };
  render() {
    const { name, email, password, errors } = this.state;
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
              {/* Content */}
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
                <form onSubmit={this.handleSubmit} >     
                <div class="row">
                 <div class="col-md-12 mb-12"> 
                      <div class="form-outline">
                      <label class="form-label text-dark"  htmlFor="name" for="form3Example1">Full Name <span class="text-danger">*</span></label>
                        <input type="text" name="name" class="form-control"id="name" value={name} onChange={this.handleChange} />    
                        {errors.name && <span className='B'>{errors.name} </span>}</div>
                  <div class="form-outline mb-4">
                  <label class="form-label text-dark" htmlFor="email"for="form3Example3">Email address <span class="text-danger">*</span></label>
                    <input type="email"  id="email"
            value={email}
            onChange={this.handleChange}class="form-control" />                   
                    {errors.email && <span className='B'>{errors.email}</span>}</div>
             <div class="form-outline mb-4">
                  <label class="form-label text-dark" htmlFor="password"for="form3Example4">Password <span class="text-danger">*</span></label>
                    <input type="password" id="password" value={password} onChange={this.handleChange}class="form-control" />
                    {errors.password && <span className='B'>{errors.password}</span>}</div>
                  <button type="submit"  className='A'class="btn  btn-block col-md-12 ">
                   Login
                  </button> 
                  </div></div>              
                </form>
   
                </div>
            </div>
             </div>
             <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div></div>
      </div>
    </section>
</div>
    )
  }
}
