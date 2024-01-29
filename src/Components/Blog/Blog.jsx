import React from "react";
import { useNavigate } from "react-router-dom";
import man from '../../assets/man.png';

function Blog()  {

  const navigate = useNavigate();

    return (
      <div className="container bg-light px-5 py-5 px-md-5 py-md-5">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex flex-column my-auto">
              <div className="text-dark text-uppercase fw-bold">
                Featured Blog
              </div>
              <div className="text-dark display-4 font-weight-bold mt-3">
                Step-by-step guide to choosing great Destination
              </div>
              <div className="text-primary text-sm font-weight-bold mt-3">
                By <span className="text-primary">James West</span>
              </div>
              <div className="text-secondary mt-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </div>
              <div className="text-dark text-lg font-weight-bold mt-3">
              <button className="btn btn-primary fw-bold" onClick={() => navigate('/blog-post')}>Read More</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={man}
              className="img-fluid w-100 h-auto my-auto"
              alt="Featured Post"
            />
          </div>
        </div>
      </div>
    );
  }


export default Blog;