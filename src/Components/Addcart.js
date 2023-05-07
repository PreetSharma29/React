// Display the shopping cart before the online delivery (Add to cart functionality)

import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';

function Addcart() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>My Online Store</h1>
      <Product
        product={{
          id: 1,
          name: 'Product 1',
          price: 10.99,
          imageUrl: 'https://via.placeholder.com/150',
        }}
        onAddToCart={handleAddToCart}
      />
      <Product
        product={{
          id: 2,
          name: 'Product 2',
          price: 19.99,
          imageUrl: 'https://via.placeholder.com/150',
        }}
        onAddToCart={handleAddToCart}
      />
      
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default Addcart;