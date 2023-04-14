import React from 'react';
import Iphone from '../assets/images/iphone-14.jpg';
import HoldingIphone from '../assets/images/iphone-hand.png';


function Jumbotron() {

    const handleLearnMore = () => {
        const element = document.querrySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        });
    }

    return ( 
        
        <div className='jumbotron-section wrapper'>
            <h2 className="title">New</h2>
            <img className='logo' src={Iphone} alt="iPhone 14 pro" />
            <p className="text">Big and Bigger.</p>
            <span className="description">
            From ₹10317.00/mo.Per Month with instant savings and No Cost EMI or ₹79900.00* before trade‑in 
            </span>
            <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li>
                    <a className="link" onClick={handleLearnMore}>Learn more</a>
                </li>
            </ul>
            <img className="iphone-img" src={HoldingIphone} alt="iPhone" />
        </div>

     );
}

export default Jumbotron;
