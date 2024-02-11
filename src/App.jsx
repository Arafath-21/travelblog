import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Blog from './Components/Blog/Blog';
import AboutUs from './Components/AboutUS/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Create from './Components/CreateBlog/Create';
import Photo from './Components/Photo/Photo';
import Footer from './Components/Footer/Footer';
import Subscribe from './Components/Subscribe';
import Post from './Components/Post/Post';
import IndividualBlogPost from './Components/IndividualBlogPost/IndividualBlogPost';
import AdminBlog from './Components/AdminBlog/AdminBlog';
export const API_URL = 'https://65927f02bb129707198fc4b4.mockapi.io/TravelBlog'
export const API_URL2 = 'https://65927f02bb129707198fc4b4.mockapi.io/Dynamic'
import './App.scss';

const App = () => {
  return <>
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home  />} />
        <Route path='/blog' element={<Blog  />} />
        <Route path='/about-us' element={<AboutUs  />} />
        <Route path='/contact-us' element={<ContactUs  />} />
        <Route path='/create-blog' element={<Create />} />
        <Route path='/gallery' element={<Photo  />} />
        <Route path='/blog-post' element={<Post />} />
        <Route path='/admin-blog-post/:id' element={<AdminBlog />} />
        <Route path='/blog-post/:id' element={<IndividualBlogPost />} />
        <Route path='*' element={<Navigate to ='/home' />} />
      </Routes>
      <Subscribe />
      <Footer />
  </BrowserRouter>  
  <ToastContainer />
  </>
};

export default App;
