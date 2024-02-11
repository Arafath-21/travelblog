import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import './_navbar.scss';

const Navbar = () => {
  const  [navData,setNavData] = useState({})
  const navigate = useNavigate();

  const fetchData = async ()=>{
    try {
      const response = await axios.get('https://65927f02bb129707198fc4b4.mockapi.io/Dynamic');
      setNavData(response.data[0].navbar)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  const handleLogin = () => {
    navigate('/create-blog')
  };  
  return <>
<nav className="navbar navbar-expand-lg shadow">
  <div className="container-fluid align-items-center"style={{overflowX:"hidden"}}>
    <button className="navbar-brand " onClick={()=>navigate('/')}><img className='logo fw-bold' src={navData.logo} alt="" /> <span className='h1 fw-bolder'>{navData.brand}</span> </button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end pt-1" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item mx-2">
          <button className="nav-link" aria-current="page" onClick={()=>navigate('/')}><i className="fa-solid fa-house px-1"></i>{navData.home}</button>
        </li>
        <li className="nav-item mx-2">
          <button className="nav-link" onClick={()=>navigate('/blog')}><i className="fa-solid fa-blog px-1"></i>{navData.blog}</button>
        </li>
        <li className="nav-item mx-2">
          <button className="nav-link" onClick={()=>navigate('/about-us')}><i className="fa-solid fa-hands-bound px-1"></i>{navData.aboutUs}</button>
        </li>
        <li className="nav-item mx-2">
          <button className="nav-link" onClick={()=>navigate('/contact-us')}><i className="fa-solid fa-phone px-1"></i>{navData.contact}</button>
        </li>
        <li className="nav-item mx-2">
          <button className="nav-link" onClick={()=>navigate('/create-blog')}><i className="fa-regular fa-calendar-plus px-1"></i>{navData.create}</button>
        </li>
        <li className="nav-item mx-2">
          <button className="nav-link" onClick={()=>navigate('/gallery')}><i className="fa-solid fa-camera px-1"></i>{navData.pic}</button>
        </li>
      </ul>
        <div>
        <button className="btn btn-primary fw-bold" onClick={handleLogin}>Login</button>
        <ToastContainer />
        </div>
    </div>
  </div>
</nav>
  
  </>
};

export default Navbar;
