import React from "react";
import { useNavigate } from "react-router-dom";

function Subscribe(props) {
    const navigate = useNavigate();

    const handlesubmit = (e)=>{
        e.preventDefault();
        alert (`subscribed`)
        navigate('/')
    }
  return (
    <form className="container bg-white px-5 py-4">
      <div className="row">
        <div className="col-md-7 mb-3 d-flex justify-content-center align-items-center">
          <h1 className="display-4 fw-bold">
            Subscribe to our newsletter to get the latest updates and news
          </h1>
        </div>
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-8 mb-3">
              <label className="visually-hidden text-right" htmlFor="email">
                Enter Your Email
              </label>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control text-secondary border border-dark"
                  id="email"
                  aria-label="Email"
                  placeholder="Enter Your Email"
                  style={{width:'272px'}}
                />
              </div>
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-primary text-dark text-lg fw-bold py-2 px-3 w-100 text-center"
                onClick={handlesubmit}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Subscribe;
