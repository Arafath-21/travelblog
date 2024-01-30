import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './_Heroabout.scss';
import { useNavigate } from 'react-router-dom';

const HeroAbout = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://65927f02bb129707198fc4b4.mockapi.io/Dynamic');
        setData(response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container padding-inlline">
        <div className="row">
          <div className="wrappers padding-inline">
            {data && (
              <>
                <div className="wrappers__about">
                  <div className="wrappers__about-subheading">{data.about.subheading}</div>
                  <div className="wrappers__about-heading">{data.about.heading}</div>
                  <div className="wrappers__about-desc">{data.about.description}</div>
                  <div className="btn btn-primary" onClick={() => navigate('/about-us')}>
                    Read more
                  </div>
                </div>
                <div className="wrappers__mission">
                  <div className="wrappers__mission-subheading">{data.mission.subheading}</div>
                  <div className="wrappers__mission-heading">{data.mission.heading}</div>
                  <div className="wrappers__mission-desc">{data.mission.description}</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAbout;
