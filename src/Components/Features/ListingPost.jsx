import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './_listing.scss';
import { API_URL2 } from '../../App';

const ListingPost = () => {
   const [listDetails, setListDetails] = useState([]);
 
   const fetchData = async () => {
     try {
       const response = await axios.get(API_URL2);
       setListDetails(response.data[0].list.post);
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };

   useEffect(() => {
     fetchData();
   }, []);

   const settings = {
     dots: true,
     infinite: true,
     speed: 700,
     slidesToShow: 4,
     slidesToScroll: 3,
     autoplay: true, 
     autoplaySpeed: 2000,
   };

   // Custom settings for medium screens
   const mediumScreenSettings = {
     ...settings,
     slidesToShow: 2,
     slidesToScroll: 1,
   };

   return (
     <div className="container list-post-container">
        <div className="h1 text-center fw-bolder">Other Blogs</div>
       <Slider {...(window.innerWidth <= 768 ? mediumScreenSettings : settings)}>
         {listDetails.map((post, index) => (
           <Link to={`/admin-blog-post/${post.id}`} key={index} className="listing-post">
             <div className="author" style={{color:'black'}}>By <span className="author--name">{post.name}</span>{post.data}</div>
             <div className="h1">{post.heading}</div>
             <img src={post.imgUrl} alt="" />
           </Link>
         ))}
       </Slider>
     </div>
   );
};

export default ListingPost;
