import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

function Products() {
  const [data, setData] = useState(null);
  const navigate= useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/serie")
      .then((response) => {
        setData(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      {data ? (
        data.map((item, index) => (
        <>
          <ProductCard
            nombre={item.nombre}
            genero={item.genero}
            duracion={item.duracion}
            onClick={()=>{
              navigate(`/products/${item.id}`);
            }}
          />
        </>
        ))
      ) : (
        <p>Esperando elementos ...</p>
      )}
    </div>
  );
}

export default Products;
