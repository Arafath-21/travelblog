import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import man from '../../assets/man.png';
import ListingPost from "../Features/ListingPost";

function Blog() {
  const [listDetails, setListDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://65927f02bb129707198fc4b4.mockapi.io/Dynamic');
      if (response.data && response.data.length > 0) {
        setListDetails(response.data[0].admpost);
      }
      setLoading(false);
    } catch (error) {
      setError('Error fetching data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="container bg-light px-5 py-5 px-md-5 py-md-5" style={{overflowX:"hidden"}}>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex flex-column my-auto">
                <div className="text-dark text-uppercase fw-bold">
                  {listDetails.subheading}
                </div>
                <div className="text-dark display-4 font-weight-bold mt-3">
                  {listDetails.heading}
                </div>
                <div className="text-primary text-sm font-weight-bold mt-3">
                  <span className="text-primary">{listDetails.name}</span>
                </div>
                <div className="text-secondary mt-3">
                  {listDetails.desc}
                </div>
                <div className="text-dark text-lg font-weight-bold mt-3">
                  <button className="btn btn-primary fw-bold" onClick={() => navigate(`/admin-blog-post/${listDetails.id}`)}>Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={listDetails.imgUrl}
                className="img-fluid w-100 h-auto my-auto"
                alt="Featured Post"
              />
            </div>
          </div>
        </div>
      )}
      <section>
        <ListingPost posts={listDetails} />
      </section>
    </>
  );
}

export default Blog;
