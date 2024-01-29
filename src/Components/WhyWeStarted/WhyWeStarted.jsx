import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/grop.png'
import './_why.scss'

const WhyWeStarted = () => {
    const navigate = useNavigate();
    return <>
        <div className="container p-0">
            <div className="imgWrapper">
                <div className="imgWrapper__groupimg">
                    <img src={img} alt="" />
                </div>
                <div className="imgWrapper__contents">
                    <div className="imgWrapper__contents-theme">Why we Started</div>
                    <div className="imgWrapper__contents-heading h1">It started out as a simple idea and evolved into our passion</div>
                    <div className="imgWrapper__contents-descrip">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</div>
                    <div className="btn btn-primary" onClick={()=>navigate('/about-us')}>Discover Our Story</div>    
                </div>
            </div>
        </div>
    </>
      
  }

export default WhyWeStarted