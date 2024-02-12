import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import HeroAbout from '../HeroAbout.jsx/HeroAbout';
import WhyWeStarted from '../WhyWeStarted/WhyWeStarted';
import Join from '../Join/Join';
import './_home.scss';
import { API_URL2 } from '../../App';

const Home = () => {
  const [teamDetails, setTeamDetails] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL2);
      setTeamDetails(response.data[0].home.teamMembers);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {

    fetchData();
  }, []);

  return (
    <div>
      <section id='header'>
        <Header />
      </section>
      <section id="hero-about">
        <HeroAbout />
      </section>
      <section style={{ paddingTop: '120px' }} id="whyweStarted">
        <WhyWeStarted />
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="auth-head text-center h1">List of team members</div>
            {teamDetails.map((member, index) => (
              <div className={`col-lg-3 col-md-3 col-sm-3 authours`} key={index}>
                <div className={`auth ${hoveredIndex === index ? 'hovered' : ''}`} onMouseOver={() => handleMouseOver(index)}>
                  <div className="auth-img"><img src={member.imgUrl} alt="" /></div>
                  <div className="auth-name">{member.name}</div>
                  <div className="auth-job">{member.job}</div>
                  <ul className="auth-icons d-flex justify-content-center align-items-center">
                    <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-brands fa-linkedin"></i></li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <Join />
      </section>
    </div>
  );
};

export default Home;
