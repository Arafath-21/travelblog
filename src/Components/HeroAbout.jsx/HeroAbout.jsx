import React from 'react'
import './_Heroabout.scss'
import { useNavigate } from 'react-router-dom'
const HeroAbout = () => {
  const navigate = useNavigate();
  return <>
    <div className="container padding-inlline">
        <div className="row">
            <div className="wrappers padding-inline">
                <div className="wrappers__about">
                    <div className="wrappers__about-subheading">About Us</div>
                    <div className="wrappers__about-heading">We are a community of content writers who share their learnings</div>
                    <div className="wrappers__about-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div className="btn btn-primary" onClick={()=>navigate('/about-us')}>Read more</div>
                </div>
                <div className="wrappers__mission">
                    <div className="wrappers__mission-subheading">Mission</div>
                    <div className="wrappers__mission-heading">Creating valuable content for creatives all around the world</div>
                    <div className="wrappers__mission-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>                    
                </div>
            </div>
        </div>
    </div>
  </>
}

export default HeroAbout