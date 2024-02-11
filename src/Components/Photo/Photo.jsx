import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './_photo.scss';

const Photo = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
    const apiKey = 'zkUaNhYoItV7VErNQgJfF4bfRmAbm4qMLXJtzn4m0gJNf4WtyDCE0RJy';
    const apiUrl = `https://api.pexels.com/v1/search?query=trip&per_page=${imagesPerPage * 10}`;

    // Fetch data from Pexels API
    axios.get(apiUrl, {
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

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className='text-center m-5'>Image Gallery</h1>
      <div className="image-container">
        {currentImages.map(image => (
          <img key={image.id} src={image.src.original} alt={image.url} className='hover-zoom image-item'/>
        ))}
      </div>
      <ul className="pagination justify-content-center">
        {Array.from({ length: Math.ceil(images.length / imagesPerPage) }, (_, i) => (
          <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
            <button onClick={() => paginate(i + 1)} className="page-link">
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Photo;
