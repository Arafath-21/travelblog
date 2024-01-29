// src/components/Header/Header.jsx
import React from 'react';
import './_header.scss';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return <>
    <div className="conatiner">
      <div className="row hero">
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="hero__img">
          </div>
          <div className="hero__contents">
            <div className="blogname">Posted on <span className='blogname--up'>blog</span></div>
            <div className="title h1">Step-by-step guide to choosing great Destination</div>
            <div className="author">By <span className="author--name">James West</span>  |  May 23, 2022 </div>
            <div className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
            <div className="btn btn-primary" onClick={()=>navigate('/blog')}>Read More </div>
          </div>
        </div>
      </div>
    </div>
  </>
};

export default Header;