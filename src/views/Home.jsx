import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [country, setCountry] = useState('');

  useEffect(() => {
    axios.get('https://ipapi.co/json/')
      .then(response => {
        setCountry(response.data.country_code);
      })
      .catch(error => {
        console.error('Error fetching country:', error);
      });
  }, []);

  let message = 'Welcome!';
  if (country === 'MX') {
    message = '¡Hola amigo!';
  }

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default Home;
