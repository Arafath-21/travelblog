import React, { useState, useEffect } from 'react';
import './_header.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [heroData, setHeroData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch hero data using Axios
    axios.get('https://65927f02bb129707198fc4b4.mockapi.io/Dynamic')
      .then(response => {
          setHeroData(response.data[0].hero);
      })
      .catch(error => {
        console.error('Error fetching hero data:', error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row hero">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="hero__img w-100" style={{backgroundImage: `url('${heroData.heroImageURL}')`}}></div>
          <div className="hero__contents">
            <div className="blogname">Posted on <span className='blogname--up'>{heroData.blogName}</span></div>
            <div className="title h1">{heroData.title}</div>
            <div className="author">By <span className="author--name">{heroData.author}</span> | {heroData.date}</div>
            <div className="sub-title">{heroData.content}</div>
            <div className="btn btn-primary" onClick={() => navigate('/blog')}>Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
