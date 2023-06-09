import React, { Categories } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Vegetables from './Vegetables';
import Dairy from './Dairy';
import Fruits from './Fruits';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.jpg';
import img13 from '../images/img13.jpg';
import {FcBookmark} from 'react-icons/fc';

export default function Categories1() {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  return (
    <div>
 
    <section className="categories" id="categories">
      <hr></hr>
      <h1 className="heading" class="text-center ">
      <FcBookmark size={50}/> 
        {' '}
        <span>Categories</span><FcBookmark size={50}/>
      </h1><hr></hr>
      <div className="box-container">
        <div className="box">
          <img src={img11} alt="" class="img-fluid img-thumbnail" />
          <h3>vegetables</h3>
          <p>upto 45% off</p>
         <Link to="/Vegetables" onClick={scrollToTop} ><button type="button" className="btn ">shop now</button></Link>
        </div>       
        <div className="box">
          <img src={img12} alt=""class="img-fluid img-thumbnail"  />
          <h3>fresh fruits</h3>
          <p>upto 45% off</p>
          <Link to="/Fruits"onClick={scrollToTop}><button type="button" className="btn ">shop now</button></Link>
        </div>

        <div className="box">
          <img src={img13}alt="" class="img-fluid img-thumbnail"  />
          <h3>dairy products</h3>
          <p>upto 45% off</p>
          <Link to="/Dairy" onClick={scrollToTop}> <button type="button" className="btn ">shop now</button></Link>
        </div>
        <Routes>
        <Route path="/Vegetables" element={<Vegetables/>} />
        <Route path="/Fruits" element={<Fruits/>} />
        <Route path="/Dairy" element={<Dairy />} />
        </Routes>
      
      </div>
    </section>
    </div>  
  );
}