import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
   const navigate = useNavigate();
   const [products, setProducts] = useState([
      {
         id: 1,
         name: 'Product 1',
         price: '$25',
         image: 'https://via.placeholder.com/200',
      },
      {
         id: 2,
         name: 'Product 2',
         price: '$40',
         image: 'https://via.placeholder.com/200',
      },
      {
         id: 3,
         name: 'Product 3',
         price: '$60',
         image: 'https://via.placeholder.com/200',
      },
      {
         id: 4,
         name: 'Product 4',
         price: '$80',
         image: 'https://via.placeholder.com/200',
      }
   ]);

   useEffect(() => {
      // Redirect user to login if not authenticated
      if (!localStorage.getItem('token')) {
         navigate('/login');
      }
   }, [navigate]);

   return (
      <div className="homepage-container">
         <h1>Welcome to the E-commerce Store</h1>
         <div className="product-list">
            {products.map(product => (
               <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <div className="product-info">
                     <h3>{product.name}</h3>
                     <p>{product.price}</p>
                     <button>Add to Cart</button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Homepage;
