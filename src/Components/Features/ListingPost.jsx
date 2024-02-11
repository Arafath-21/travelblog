import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './_listing.scss';

const ListingPost = () => {
   const [listDetails, setListDetails] = useState([]);
 
   const fetchData = async () => {
     try {
       const response = await axios.get('https://65927f02bb129707198fc4b4.mockapi.io/Dynamic');
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

   return (
     <div className="container list-post-container">
       <Slider {...settings}>
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
