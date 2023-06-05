import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nearby from './Nearby';
import Store2 from '../stores/Store2';
import imgs35 from '../images/imgs35.jpg';
import imgs36 from '../images/imgs36.jpg';
import imgs33 from '../images/imgs33.jpg';
import imgs38 from '../images/imgs38.jpg';
import img33 from '../images/img33.jpg';
import imgs34 from '../images/imgs34.jpg';
import {FcBookmark} from 'react-icons/fc';
export default function Cards() {
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 100, 
      behavior: 'smooth'
    });
  };
  const scrollToTop2 = () =>{
    window.scrollTo({
      top: 700, 
      behavior: 'smooth'
    });
  };
  const scrollToTop3 = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  return (
    <div>
        <hr></hr>
       <h1 class="text-center "> <FcBookmark size={50}/>Store' In India   <FcBookmark size={50}/></h1> 
    <hr></hr>
<div class="row" >
        <div class="col">
<div class="grid-wrapper">
<div class="card-container box">
	<div class="card-flip">    
    <div class="card front">
      <img src={imgs35} class="card-img-top img-fluid" alt="movie-poster"/>
        <div class="card-block">
          <h5 class="card-title">Kolkata</h5>
              <p class="card-text">The Biggest Snap mart. In Kolkata</p>
                <p class="card-text"><small class="text-muted">2023</small></p>
          </div>
    </div>
    <div class="card back">
      <div class="card-header warning-color"></div>
        <div class="card-block text-center">
          <h4 class="card-title">Rating</h4>
					<p class="card-text"><a href="#" class="rating">7,52/10</a></p>
          <Link to="/Nearby"  onClick={scrollToTop} class="btn orange">See More</Link>
        </div>
						<img class="movie" src={imgs35} alt="back-img"/>
      </div>
    
	</div>
</div>
</div>
</div>
<div class="col">
<div class="grid-wrapper">
<div class="card-container box">
	<div class="card-flip">    
    <div class="card front">
      <img src={imgs36} class="card-img-top img-fluid" alt="movie-poster"/>
        <div class="card-block">
          <h5 class="card-title">Kochi</h5>
              <p class="card-text">The Biggest Snap mart.</p>
                <p class="card-text"><small class="text-muted">2011</small></p>
          </div>
    </div>

    <div class="card back">
      <div class="card-header warning-color"></div>
        <div class="card-block text-center">
          <h4 class="card-title">Rating</h4>
					<p class="card-text"><a href="#" class="rating">7,52/10</a></p>
          <Link to="/Store2" onClick={scrollToTop} class="btn orange">See More</Link>
        </div>
						<img class="movie" src={imgs36} alt="back-img"/>
      </div>
     
	</div>
</div></div></div>

<div class="col">
<div class="grid-wrapper">
<div class="card-container box">
	<div class="card-flip">    
    <div class="card front">
      <img src={imgs33} class="card-img-top img-fluid" alt="movie-poster"/>
        <div class="card-block">
          <h5 class="card-title">Bangalore</h5>
              <p class="card-text">The Biggest Snap mart.</p>
                <p class="card-text"><small class="text-muted">2021</small></p>
          </div>
    </div>

    <div class="card back">
      <div class="card-header warning-color"></div>
        <div class="card-block text-center">
          <h4 class="card-title">Rating</h4>
					<p class="card-text"><a href="#" class="rating">7,52/10</a></p>
          <Link to="/Nearby"  onClick={scrollToTop3} class="btn orange">See More </Link>
        </div>
						<img class="movie" src={imgs33} alt="back-img"/>
      </div>
     
	</div>
</div></div></div>

<div class="col">
<div class="grid-wrapper">
<div class="card-container box">
	<div class="card-flip">    
    <div class="card front">
      <img src={imgs38} class="card-img-top img-fluid" alt="movie-poster"/>
        <div class="card-block">
          <h5 class="card-title">Pune</h5>
              <p class="card-text">Our main Head couters snap mart.</p>
                <p class="card-text"><small class="text-muted">2011</small></p>
          </div>
    </div>

    <div class="card back">
      <div class="card-header warning-color"></div>
        <div class="card-block text-center">
          <h4 class="card-title">Rating</h4>
					<p class="card-text"><a href="#" class="rating">7,52/10</a></p>
          <Link to="/Nearby"  onClick={scrollToTop} class="btn orange">See More</Link>
        </div>
						<img class="movie" src={imgs38} alt="back-img"/>
      </div>
     
	</div>
</div></div></div>
</div><hr></hr>
<div class="row" >
        <div class="col">
<div class="grid-wrapper">
<div class="card-container box">
	<div class="card-flip">    
    <div class="card front">
      <img src={imgs35} class="card-img-top img-fluid" alt="movie-poster"/>
        <div class="card-block">
          <h5 class="card-title">Delhi</h5>
              <p class="card-text">One of the best mart in delhi.</p>
                <p class="card-text"><small class="text-muted">2011</small></p>
          </div>
    </div>
    <div class="card back">
      <div class="card-header warning-color"></div>
        <div class="card-block text-center">
          <h4 class="card-title">Rating</h4>
					<p class="card-text"><a href="#" class="rating">7,52/10</a></p>
          <Link to="/Nearby"  onClick={scrollToTop} class="btn orange">See More</Link>
        </div>
						<img class="movie" src={imgs35} alt="back-img"/>
      </div>
     
	</div>
</div>
</div>
</div>
<div class="col">
<div class="grid-wrapper">
<div class="card-container box">
	<div class="card-flip">    
    <div class="card front">
      <img src={imgs36} class="card-img-top img-fluid" alt="movie-poster"/>
        <div class="card-block">
          <h5 class="card-title">Hyderabad</h5>
              <p class="card-text">Biggest mart in city SNAP-MART.</p>
                <p class="card-text"><small class="text-muted">2023</small></p>
          </div>
    </div>

    <div class="card back">
      <div class="card-header warning-color"></div>
        <div class="card-block text-center">
          <h4 class="card-title">Rating</h4>
					<p class="card-text"><a href="#" class="rating">7,52/10</a></p>
          <Link to="/Nearby"  onClick={scrollToTop} class="btn orange">See More</Link>
        </div>
						<img class="movie" src={imgs36} alt="back-img"/>
      </div>
     
	</div>
</div></div></div>

<div class="col">
<div class="grid-wrapper">
<div class="card-container box">
	<div class="card-flip">    
    <div class="card front">
      <img src={imgs34} class="card-img-top img-fluid" alt="movie-poster"/>
        <div class="card-block">
          <h5 class="card-title">Gujarat</h5>
              <p class="card-text">Our pride our mart snap mart.</p>
                <p class="card-text"><small class="text-muted">2022</small></p>
          </div>
    </div>

    <div class="card back">
      <div class="card-header warning-color"></div>
        <div class="card-block text-center">
          <h4 class="card-title">Rating</h4>
					<p class="card-text"><a href="#" class="rating">7,52/10</a></p>
          <Link to="/Nearby"  onClick={scrollToTop} class="btn orange">See More</Link>
        </div>
						<img class="movie" src={imgs34} alt="back-img"/>
      </div>
     
	</div>
</div></div></div>

<div class="col">
<div class="grid-wrapper">
<div class="card-container box">
	<div class="card-flip">    
    <div class="card front">
      <img src={img33} class="card-img-top img-fluid" alt="movie-poster"/>
        <div class="card-block">
          <h5 class="card-title">Nellore</h5>
              <p class="card-text">Our First store starting in this city.</p>
                <p class="card-text"><small class="text-muted">2011</small></p>
          </div>
    </div>

    <div class="card back">
      <div class="card-header warning-color"></div>
        <div class="card-block text-center">
          <h4 class="card-title">Rating</h4>
					<p class="card-text"><a href="#" class="rating">8,52/10</a></p>
          <Link to="/Nearby"  onClick={scrollToTop} class="btn orange">See More</Link>
        </div>
						<img class="movie" src={img33} alt="back-img"/>
      </div>
      
    
	</div>
</div></div></div>
</div><Routes>
      <Route path="/Nearby" element={<Nearby/>} />
      <Route path="/Store2" element={<Store2/>} />
       </Routes></div>
  )
}
