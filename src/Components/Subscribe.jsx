import React from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Subscribe() {
  const handlesubmit = (e)=>{
    e.preventDefault(); // Prevent default form submission
    toast.success("Subscribed"); // Display toast message
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
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary text-dark text-lg fw-bold py-2 px-3 w-100 text-center" onClick={handlesubmit}>Subscribe</button>
            <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Subscribe;
