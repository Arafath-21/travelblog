import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './_why.scss';
import { API_URL2 } from '../../App';

const WhyWeStarted = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL2);
        setData(response.data[0]);            
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container p-0">
      <div className="imgWrapper">
        <div className="imgWrapper__groupimg">
          <img src={data && data.started.imgUrl} alt="" />
        </div>
        <div className="imgWrapper__contents">
          <div className="imgWrapper__contents-theme">{data && data.started.subheading}</div>
          <div className="imgWrapper__contents-heading h1">{data && data.started.heading}</div>
          <div className="imgWrapper__contents-descrip">{data && data.started.description}</div>
          <div className="btn btn-primary" onClick={() => navigate('/about-us')}>Discover Our Story</div>
        </div>
      </div>
    </div>
  );
};

export default WhyWeStarted;
