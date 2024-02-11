import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Post() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const navigate = useNavigate();

  const getBlogs = async () => {
    try {
      const res = await axios.get('https://65927f02bb129707198fc4b4.mockapi.io/TravelBlog');
      setBlogs(res.data);
      setFilteredBlogs(res.data); // Initialize filteredBlogs with all blogs
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    if (selectedFilter === "All") {
      setFilteredBlogs(blogs); // If selectedFilter is "All", show all blogs
    } else {
      const filtered = blogs.filter(blog => blog.selectedOption === selectedFilter);
      setFilteredBlogs(filtered); // Otherwise, filter blogs based on selectedFilter
    }
  }, [selectedFilter, blogs]);

  return (
    <div className="container px-5 py-5 px-md-5 py-md-5">
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="btn-group" role="group">
            <button type="button" className={`btn ${selectedFilter === "All" ? "btn-primary" : "btn-secondary"}`} onClick={() => setSelectedFilter("All")}>All</button>
            <button type="button" className={`btn ${selectedFilter === "solo" ? "btn-primary" : "btn-secondary"}`} onClick={() => setSelectedFilter("solo")}>Solo</button>
            <button type="button" className={`btn ${selectedFilter === "group" ? "btn-primary" : "btn-secondary"}`} onClick={() => setSelectedFilter("group")}>Group</button>
            <button type="button" className={`btn ${selectedFilter === "couple" ? "btn-primary" : "btn-secondary"}`} onClick={() => setSelectedFilter("couple")}>Couple</button>
          </div>
        </div>
        {filteredBlogs.map(blog => (
          <div className="col-md-4 mb-4" key={blog.id}>
            <div className="card">
              <img
                src={blog.Images}
                className="card-img-top"
                alt={blog.Title}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title h3">{blog.Title}</h5>
                  <p className="card-text h3">{blog.selectedOption} trip</p>
                </div>
                <p className="card-text">{blog.description}</p>
                <button className="btn btn-primary" onClick={() => navigate(`/blog-post/${blog.id}`)}>Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
