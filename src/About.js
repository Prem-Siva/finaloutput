import React, { Component } from 'react';
import './About.css';

export class Main extends Component {
  render() {
    return (
      <div className='bg'>
      <div className='card'>
        
          <center>
            <h1>About</h1>
            <br/>
            <h4>
              We are a leading reservation platform based in Coimbatore.
              <br />
              <br />
              We are dedicated to providing a seamless dining experience for both customers and restaurants.
              <br />
              <br />
              Our user-friendly platform allows users to effortlessly discover and book their favorite restaurants
              while also offering restaurants a powerful tool to manage their reservations and optimize their
              operations.
              <br />
              <br />
              With a wide range of dining options and a commitment to exceptional customer service,
              we are the go-to choice for all your restaurant reservation needs.
            </h4>
          </center>
        
      </div>
      </div>
    );
  }
}

export default Main;
