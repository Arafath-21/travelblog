import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BlogCard from '../BlogCard/BlogCard';
import axios from 'axios';
import { API_URL } from '../../App';
import { useNavigate } from 'react-router-dom';

function LoginSignup({ onLogin, onSignup, isSignup, onToggleSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    onLogin(username, password);
  };

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    onSignup({ username, password, email, firstName, lastName });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      handleSignup();
    } else {
      handleLogin();
    }
  };

  return (
    <div className="login-signup-wrapper container">
      <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
      <Form onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
          </>
        )}
        {!isSignup && (
          <Form.Group className="mb-3">
            <Form.Label>Username or Email</Form.Label>
            <Form.Control type="text" placeholder="Enter username or email" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>
        )}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        {isSignup && (
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </Form.Group>
        )}
        <Button variant="primary" type="submit">
          {isSignup ? 'Sign Up' : 'Login'}
        </Button>
        {!isSignup && (
          <Button variant="primary" onClick={onToggleSignup} className="mx-2">
            Sign Up
          </Button>
        )}
      </Form>
    </div>
  );
}

function Create() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (username, password) => {
    console.log('Logged in with username:', username, 'and password:', password);
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
  };

  const handleSignup = ({ username, password, email, firstName, lastName }) => {
    console.log('Signed up with username:', username, 'password:', password, 'email:', email, 'firstName:', firstName, 'lastName:', lastName);
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
  };

  const handleCreateBlog = async (formData) => {
    try {
      const res = await axios.post(API_URL, formData);
      if (res.status === 201) {
        alert('Blog Created Successfully');
        navigate('/blog-post');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onToggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="create-wrapper container">
      {!isLoggedIn && <LoginSignup onLogin={handleLogin} onSignup={handleSignup} isSignup={isSignup} onToggleSignup={onToggleSignup} />}
      {isLoggedIn && (
        <div className="form-wrapper">
          <div className="h1 text-center fw-bolder py-5">Create Blog</div>
          <BlogForm onSubmit={handleCreateBlog} />
        </div>
      )}
    </div>
  );
}

function BlogForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, image, status: true });
  };

  return <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
    <div className='preview-wrapper'>
    <h3 className='text-center'>Preview</h3>
      <BlogCard title={title} image={image} description={description}/>
    </div>    
    </>;
}

export default Create;
