import React from 'react'
import { useNavigate } from 'react-router-dom'
import './_join.scss'
const Join = () => {

  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/create-blog')
  }
  return <>
    <div className="container"style={{overflow:"hidden"}}>
        <div className="row">
        <div className="joins">
            <div className="joins-headins">Join our team to be a part of our story</div>
            <div className="joins-descriptios">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
            <div className="btn btn-primary" onClick={handleClick}>Join Now</div>
        </div>
        </div>        
    </div>
  </>
}

export default Join