import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

 function Navbar() {

 return (
                <div className='Apps'>
                <div className = 'headerstuff'>
                <div className = 'topnav'>
                <a>
                <Link to={'/'}>
                <button className = 'button button1'>Home</button></Link>
                </a>
                <a>
                <Link  to={`/tents`}>
                <button className='button button2'>Tents</button>
                </Link>
                </a>
                <a>
                <Link to={'/sleepybags'}>
                <button className='button button3'>Sleeping Bags</button>
                </Link>
                </a>
                <a>
                <Link to={'/backpacks'}>
                <button className='button button4'>Backpacks</button>
                </Link>
                </a>
                <a>
                <Link to={'/shoes'}>
                <button className='button button5'>Shoes</button>
                </Link>
                </a>
                <a>
                <Link to={'/cart'}>
                <button className='button button6'>Cart</button>
                </Link>
                </a>

                </div>

                {/* <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div> */}

                </div>
            </div> 
        )
    
}

export default Navbar;