import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <span>{product.title}</span>
          <div className="icons">
            <Link to={`/view/${product.id}`} className="icon">
              <FontAwesomeIcon icon={faEye} />
            </Link>
            <Link to={`/update/${product.id}`} className="icon">
              <FontAwesomeIcon icon={faEdit} />
            </Link>
            <span className="icon" onClick={() => handleDelete(product.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
