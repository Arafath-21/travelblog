import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Post() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const getBlogs = async () => {
    try {
      const res = await axios.get('https://65927f02bb129707198fc4b4.mockapi.io/TravelBlog');
      setBlogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="container bg-light px-5 py-5 px-md-5 py-md-5">
      <div className="row">
        {blogs.map(blog => (
          <div className="col-md-4 mb-4" key={blog.id}>
            <div className="card">
              <img
                src={blog.Images}
                className="card-img-top"
                alt={blog.Title}
              />
              <div className="card-body">
                <h5 className="card-title">{blog.Title}</h5>
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
