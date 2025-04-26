import React, { useState, useEffect } from 'react';
import { fetchFoxImage } from '../services/foxService';

function FoxComponent() {
  const [foxImage, setFoxImage] = useState(null);

  const handleFetchFox = () => {
    fetchFoxImage()
      .then(data => setFoxImage(data.image))
      .catch(error => console.error('Error fetching fox image:', error));
  };

  useEffect(() => {
    handleFetchFox(); // Fetch one image when the component loads
  }, []);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center p-5 m-5'>
      <h1>ثعلب عشوائي 🦊</h1>
      {foxImage && <img src={foxImage} alt="Random Fox" style={{ width: '300px', height: 'auto' }} />}
      <br />
      <button onClick={handleFetchFox}>هات صورة جديدة</button>
    </div>
  );
}

export default FoxComponent;
