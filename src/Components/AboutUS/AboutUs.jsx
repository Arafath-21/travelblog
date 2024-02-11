import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './_about.scss';
import Join from '../Join/Join';

const AboutUs = () => {
  const [loading, setLoading] = useState(true);
  const [teamDetails, setTeamDetails] = useState([]);
  const [teamData, setteamData] = useState([]);
  const [aboutData, setAboutData] = useState({});
  const [missionData, setMissionData] = useState({});
  const [visionData, setVisionData] = useState({});
  const [blogCount, setBlogCount] = useState(0);
  const [viewsCount, setViewsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://65927f02bb129707198fc4b4.mockapi.io/Dynamic');
      setTeamDetails(response.data[0].home.teamMembers);
      
      const teamResponse = await axios.get('https://65927f02bb129707198fc4b4.mockapi.io/Dynamic');
      setteamData(teamResponse.data[0].team.teamData);

      const aboutResponse = await axios.get('https://65927f02bb129707198fc4b4.mockapi.io/Dynamic');
      setAboutData(aboutResponse.data[0].about);

      const visionResponse = await axios.get('https://65927f02bb129707198fc4b4.mockapi.io/Dynamic');
      setVisionData(visionResponse.data[0].vision);
      
      const missionResponse = await axios.get('https://65927f02bb129707198fc4b4.mockapi.io/Dynamic');
      setMissionData(missionResponse.data[0].mission);

      setLoading(false); // Set loading to false once all data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
    const animateNumbers = (targetValue, setFunction) => {
      let currentValue = 0;
      const increment = targetValue / 60;

      const interval = setInterval(() => {
        currentValue = currentValue + increment;
        setFunction(Math.floor(currentValue));

        if (currentValue >= targetValue) {
          clearInterval(interval);
        }
      }, 250.67);

      return interval;
    };

    const blogInterval = animateNumbers(12, setBlogCount);
    const viewsInterval = animateNumbers(1800, setViewsCount);
    const usersInterval = animateNumbers(30000, setUsersCount);

    return () => {
      clearInterval(blogInterval);
      clearInterval(viewsInterval);
      clearInterval(usersInterval);
    };
  }, []);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div>
        {aboutData && (
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="wrp">
                <div className="subhead">{aboutData.subheading}</div>
                <div className="head h1">{aboutData.heading}</div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 offset-2 d-flex justify-content-center align-items-center abou-desc h3">
              <p>{aboutData.description}</p>
            </div>
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="aboutImg">
            <img src={aboutData.imgUrl} alt="" className='w-100' />
            <div className='d-flex justify-content-evenly align-items-center counter-card'>
              <div className="counts text-center">
                <div className="totalblog">{blogCount}+</div>
                <div>{aboutData.blog}</div>
              </div>
              <div className="counts text-center">
                <div className="totalblog">{viewsCount}k+</div>
                <div>{aboutData.views}</div>
              </div>
              <div className="counts text-center">
                <div className="totalblog">{usersCount}k+</div>
                <div>{aboutData.users}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-6 mis">
          <div className="mis-heading">{missionData.subheading}</div>
          <div className="mis-descr">{missionData.heading}</div>  
          <div className="mis-descr2">{missionData.description}</div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-6  mis">
          <div className="mis-heading">{visionData.subheading}</div>
          <div className="mis-descr">{visionData.heading}</div>  
          <div className="mis-descr2">{visionData.description}</div>        
        </div>
      </div>
      {teamData.map((team, index) => (
        <div className="row" key={index}>
          <div className={`col-md-6 ${team.order} col-lg-6 col-sm-6 team`}>
            <div className="teamhead">{team.heading}</div>
            <div className="teamdesccr">{team.description1}</div>
            <div className="teamdescr2">{team.description2}</div>
          </div>
          <div className={`col-md-6 ${team.order2} col-lg-6 col-sm-6 team`}>
            <img src={team.imageSrc} className='img-fluid' alt="" />
          </div>
        </div>
      ))}
      <div className="row">
        <div className="auth-head text-center h1">List of team members</div>
        {teamDetails.map((e, i) => (
          <div className={`col-lg-3 col-md-3 col-sm-3 authours`} key={i}>
            <div className={`auth ${hoveredIndex === i ? 'hovered' : ''}`} onMouseOver={() => handleMouseOver(i)}>
              <div className="auth-img"><img src={e.imgUrl} alt="" /></div>
              <div className="auth-name">{e.name}</div>
              <div className="auth-job">{e.job}</div>
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
      <Join />
    </div>
  );
};

export default AboutUs;
