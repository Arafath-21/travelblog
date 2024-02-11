import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BlogCard from '../BlogCard/BlogCard';
import axios from 'axios';
import { API_URL } from '../../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginSignup({ onLogin, onSignup, isSignup, onToggleSignup }) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    onLogin(email, password);
    setEmail('')
    setPassword('')
  };

  const handleSignup = () => {
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    onSignup({ password, email, firstName, lastName });
    toast.success('Signed up sucessfully')
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
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
              <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </Form.Group>
          </>
        )}
        {!isSignup && (
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </Form.Group>
        )}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </Form.Group>
        {isSignup && (
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
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

  const handleBlogLogin = (email ,password) => {
    if (!email || !password) {
      console.log(email,password);
      toast.error('Please fill in all required fields');
      return;
    }
  
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedUserName = localStorage.getItem('firstName')
  
    if (storedEmail === email && storedPassword === password) {
      localStorage.setItem('isLoggedIn', true);
      setIsLoggedIn(true);
      toast.success(`Welcome ${storedUserName}`)
    } else {
      toast.error('Incorrect email or password');
    }
  };
  

const handleBlogSignUp = ({ password, email, firstName, lastName }) => {
  console.log( 'password:', password, 'email:', email, 'firstName:', firstName, 'lastName:', lastName);
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('email',email)
  localStorage.setItem('password',password)
  localStorage.setItem('firstName',firstName)
  setIsSignup(!isSignup);
};


  const handleCreateBlog = async (formData) => {
    try {
      const res = await axios.post(API_URL, formData);
      if (res.status === 201) {
        navigate('/blog-post');
        // localStorage.setItem('isLoggedIn','false')
      }
      toast.info('Blog Created Successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const onToggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="create-wrapper container">
      {!isLoggedIn && <LoginSignup onLogin={handleBlogLogin} onSignup={handleBlogSignUp} isSignup={isSignup} onToggleSignup={onToggleSignup} />}
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
  const [Title, setTitle] = useState('');
  const [Images, setImages] = useState('');
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Title || !description || !Images || !selectedOption) {
      toast.error('Please fill in all fields');
      return;
    }    
    onSubmit({ Title, Images, description, selectedOption, status: true });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={Title}
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
            value={Images}
            onChange={(e) => setImages(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Mode Of the Trip</Form.Label>
        <Form.Select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value=""></option>
          <option value="solo">solo</option>
          <option value="group">group</option>
          <option value="couple">couple</option>
        </Form.Select>
      </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
      <div className='preview-wrapper'>
        <h3 className='text-center'>Preview</h3>
        <BlogCard title={Title} image={Images} description={description} selectedOption={selectedOption}/>
      </div>
    </>
  );
}

export default Create;
