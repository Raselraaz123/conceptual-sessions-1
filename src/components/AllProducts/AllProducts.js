import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const AllProducts = (props) => {
  const { setcartCount } = props;

  const [products, setProduct] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  })
  console.log(products)
  return (
    <div>
      <h1>All Products</h1>
      <div className="row container">
        {products.map((pd) => (
          <Product
            setcartCount={setcartCount}
            key={pd.id}
            product={pd}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;