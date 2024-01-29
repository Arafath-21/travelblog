import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './_photo.scss';

const Photo = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
    const apiKey = 'zkUaNhYoItV7VErNQgJfF4bfRmAbm4qMLXJtzn4m0gJNf4WtyDCE0RJy';
    const apiUrl = 'https://api.pexels.com/v1/search?query=trip&per_page=80';


    // Fetch data from Pexels API
    axios.get(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': apiKey,
      },
    })
      .then(response => {
        if (response.status === 200) {
          const imagesData = response.data.photos;
          setImages(imagesData);
        } else {
          console.error('Failed to fetch images from Pexels API');
        }
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }, []);

  return (
    <div>
      <h1 className='text-center text-centerd m-5'>Image Gallery</h1>
      <div className="image-container">
        {images.map(image => (
          <img key={image.id} src={image.src.original} alt={image.url} className='hover-zoom'/>
        ))}
      </div>
    </div>
  );
};

export default Photo;
