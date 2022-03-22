import React from 'react';
import './Product.css'
const Product = (props) => {
  console.log(props.Product)
  const { setcartCount } = props;
  return (
    <div className="col-md-4">
      <div className="card p-2 border">
        <img className="w-50 m-auto" src={props.product.image} alt="" />
        <h1>{props.product.title.slice(0, 10)}</h1>
        <div className="d-flex justify-content-around">
          <button onClick={setcartCount} className="btn btn-success">
            Add to cart
          </button>
          <button className="btn btn-danger">Delete</button>
          <button className="btn btn-info">Ditails</button>
        </div>
      </div>
    </div>
  );
};

export default Product;