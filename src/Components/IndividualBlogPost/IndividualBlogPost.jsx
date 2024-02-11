import React, { useEffect, useState } from "react";
import { useNavigate ,useParams } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";

function IndividualBlogPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');

  // Maintain a separate state for the image URL and createdAt
  const [imageUrl, setImageUrl] = useState('');
  const [created, setCreated] = useState('');

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const res = await axios.get(`https://65927f02bb129707198fc4b4.mockapi.io/TravelBlog/${id}`);
        setBlogPost(res.data);
        setEditedTitle(res.data.Title);
        setEditedContent(res.data.description);
        // Set image URL separately
        setImageUrl(res.data.Images);
        setCreated(res.data.createdAt);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogPost();
  }, [id]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    try {
      const updatedPost = { Title: editedTitle, description: editedContent, Image: imageUrl, createdAt: created };
      await axios.put(`https://65927f02bb129707198fc4b4.mockapi.io/TravelBlog/${id}`, updatedPost);
      setBlogPost(updatedPost);
      setEditMode(false);
      alert('Item edited successfully!');
      navigate('/blog-post')
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      // Show confirmation dialog before deleting
      const confirmDelete = window.confirm("Are you sure you want to delete this blog post?");
      if (confirmDelete) {
        await axios.delete(`https://65927f02bb129707198fc4b4.mockapi.io/TravelBlog/${id}`);
        // Assuming successful deletion, navigate back to the blog list
        alert('post deleted')
        navigate('/blog-post');
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  
  return (
    <>
      <div className="h1 fw-bolder text-center py-5">Blog-Post</div>
      <div className="container d-flex justify-content-center align-items-center">
        {blogPost ? (
          <div className="card p-5 my-5" style={{width:"520px"}}>
            {editMode ? <>
                <div className="h4 text-center text-danger mb-3">You cannot edit image!!</div>
              <div>
                {/* Display image */}
                <img src={imageUrl} className="w-100 mb-3" alt="" />
                <input
                  type="text"
                  className="form-control mb-3"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <textarea
                  className="form-control mb-3"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                />
                <p className="text-muted">Created On {created}</p>
                <button className="btn btn-primary mb-3" onClick={handleSave}>Save</button>
                <div className="h6 text-muted">Please save after the changes</div>
              </div>
              </> : (
              <div>
                <h2 className="mb-3">{blogPost.Title}</h2>
                {/* Display image */}
                <img src={imageUrl} className="w-100 mb-3" alt="" />
                  <p>{blogPost.description}</p>
                <div className="text-small text-muted mb-3">Created On {blogPost.createdAt} </div>
                <div className="d-flex justify-content-center align-items-center mx-5">
                  <div className="btn btn-primary fw-bolder m-5" onClick={handleEdit}>Edit</div>
                  <div className="btn btn-primary fw-bolder m-5" onClick={handleDelete}>Delete</div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default IndividualBlogPost;