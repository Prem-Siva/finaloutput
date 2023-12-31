import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style.css";
import { Link } from 'react-router-dom';
import pic1 from './food.jpg';
import pic2 from './t2.jpg';
import pic4 from './f2.jpg';
import pic5 from './t3.jpg';
import pic7 from './f3.jpg';
import pic8 from './pic8.jpg';
import pic10 from './pic10.jpg';
const Main = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <div class="">
    
    <header>
      
			<h3>El Hotel  </h3>
			<nav ref={navRef}>
				<a href="/#">HOME</a>
        <Link to="About"><a href="/#">ABOUT</a></Link>
        <Link to="Help"><a href="/#">HELP</a></Link>
        <Link to="Contact"><a href="/#">CONTACT</a></Link>
        <Link to="Payment"><a href="/#">BOOKING</a></Link>
        <Link to="MobileRechargePlans">TABLES</Link>
        <div className='Boys'>
        <Link to="Loginsignup"><a href="/">SignIn</a></Link>
        </div>
				{/* <button
					className="nav1"
					onClick={showNavbar}>
					<FaTimes />
				</button> */}
			</nav>
			<button
				className="nav2"
				onClick={showNavbar}>
			
			</button>
	</header>
  <div className="bod3"style={{marginLeft:"0.5cm"}}>
<div id="slideshow">
<div class="slide-wrapper">
    <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
            <img src={pic1} style={{width:"100%",heigth:"10cm"}}/></Link>
        </h1>
    </div>
    <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
        <img src={pic2} style={{width:"100%",heigth:"10cm"}}/>
        </Link>
        </h1>
    </div>
    <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
        <img src={pic4} style={{width:"100%",heigth:"10cm"}}/>
        </Link>
        </h1>
    </div>
    <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
        <img src={pic5} style={{width:"100%",heigth:"20cm"}}/>
        </Link>
        </h1>
        </div>
        <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
        <img src={pic7} style={{width:"100%",heigth:"10cm"}}/>
        </Link>
        </h1>
        </div>
        <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
        <img src={pic8} style={{width:"100%",heigth:"10cm"}}/>
        </Link>
        </h1>
        </div>
        <div class="slide">
        <h1 class="slide-number">
        <Link to="/bok">
        <img src={pic10} style={{width:"100%",heigth:"10cm"}}/>
        </Link>
        </h1>
        </div>
        </div>
        </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
	<div class="footer"style={{marginLeft:"0.5cm"}}>
      <div class="heading">
        <h2>El_Hotel </h2>
      </div>
      <div class="content">
        <div class="services">
          <h4>Services</h4>
          <p><a href="#">Dine in </a></p>
          <p><a href="#">Home Delivery </a></p>
          <p><a href="#">Take Away </a></p>
        </div>
        <div class="social-media">
          <h4>Social</h4>
          <p>
            <a href="https://www.linkedin.com/onlinebillpayment"
              ><i class="fab fa-linkedin"></i> Linkedin</a
            >
          </p>
          <p>
            <a href="https://www.twitter.com"
              ><i class="fab fa-twitter"></i> Twitter</a
            >
          </p>
          <p>
            <a href="https://github.com"
              ><i class="fab fa-github"></i> Github</a
            >
          </p>
          <p>
            <a href="https://www.facebook.com"
              ><i class="fab fa-facebook"></i> Facebook</a
            >
          </p>
          <p>
            <a href="https://www.instagram.com"
              ><i class="fab fa-instagram"></i> Instagram</a
            >
          </p>
        </div>
        <div class="links">
          <h4>Quick links</h4>
          <p><a href="#">Home</a></p>
          <p><a href="/About">About</a></p>
          <p><a href="/Help">Help</a></p>
          <p><a href="/Contact">Contact</a></p>
        </div>
        <div class="details">
          <h4 class="address">Address</h4>
          <p>
            El Hotel ,Pantaloons opp ,Main Road  <br />
            Town hall, kento.
          </p>
          <h4 class="mobile">Mobile</h4>
          <p><a href="#">+91-8870754365<br></br>
          +91-0486534566</a></p>
          <h4 class="mail">Email</h4>
          <p><a href="#">elhotel69@gmail.com</a></p>
        </div>
        <footer>
        <hr />
        © 2022 Restaurant
        </footer>
        </div>
        </div>
	
    </div>
  );
};

export default Main;