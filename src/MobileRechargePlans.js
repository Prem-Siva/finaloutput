import React, { useState, useEffect } from 'react';
import './MobileRechargePlans.css'; // Import the CSS file for this component
import { Link } from 'react-router-dom';

// Mock data for plans (replace this with actual API data)
const mockPlans = [
  { id: 1, name: 'The Duo', description: 'Perfect table choice for privacy seekers', price: 199 },
  { id: 2, name: 'Quad People', description: 'What is more great than a duo? a Squad!', price: 249 },
  { id: 3, name: 'Octal Gang', description: 'A perfect Table for your reunion or get-together!', price: 399 },
  // Add more plans here...
];

const MobileRechargePlans = () => {
  const [plans, setPlans] = useState([]);

  // Simulate fetching data from an API (useEffect with an empty dependency array runs only once)
  useEffect(() => {
    // Replace this with actual API fetch call
    // For now, use the mockPlans as the initial data
    setPlans(mockPlans);
  }, []);

  return (
    <div className='bckimg'>
    <div className="mobile-recharge-plans">
      
      <h1>Types of Table Available</h1>
      <div className="plans-container" style={{backgroundImage:"white"}}>
        {plans.map((plan) => (
          <Link to='/Payment'>
          <div className="plan-card" key={plan.id}>
            <h2 className="plan-name">{plan.name}</h2>
            <p className="plan-description">{plan.description}</p>
            <p className="plan-price">Reservation fee: ₹{plan.price}</p>
          </div>
          </Link>
        ))}
        </div>
       
        <div >
        <br/><br/><br/>
        <div></div>
    </div>
    </div></div>

  );
}
export default MobileRechargePlans;

