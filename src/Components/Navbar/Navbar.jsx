// src/components/Navbar/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import './_navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();
  return <>
<nav className="navbar navbar-expand-lg shadow">
  <div className="container-fluid align-items-center">
    <button className="navbar-brand " onClick={()=>navigate('/')}><img className='logo fw-bold' src={logo} alt="" /> <span className='h1 fw-bolder'>VoyageVibes</span> </button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end pt-1" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item mx-2">
          <button className="nav-link" aria-current="page" onClick={()=>navigate('/')}><i className="fa-solid fa-house px-1"></i>Home</button>
        </li>
        <li className="nav-item mx-2">
          <button className="nav-link" onClick={()=>navigate('/blog')}><i className="fa-solid fa-blog px-1"></i>Blog</button>
        </li>
        <li className="nav-item mx-2">
          <button className="nav-link" onClick={()=>navigate('/about-us')}><i className="fa-solid fa-hands-bound px-1"></i>About Us</button>
        </li>
        <li className="nav-item mx-2">
          <button className="nav-link" onClick={()=>navigate('/contact-us')}><i className="fa-solid fa-phone px-1"></i>Conatct Us</button>
        </li>
        <li className="nav-item mx-2">
          <button className="nav-link" onClick={()=>navigate('/create-blog')}><i className="fa-regular fa-calendar-plus px-1"></i>Create Blog</button>
        </li>
        <li className="nav-item mx-2">
          <button className="nav-link" onClick={()=>navigate('/gallery')}><i className="fa-solid fa-camera px-1"></i>Photos</button>
        </li>
      </ul>
        <button className="btn btn-primary fw-bold" onClick={()=>{alert("Subcribed")}}>Subscribe</button>
    </div>
  </div>
</nav>
  
  </>
};

export default Navbar;
