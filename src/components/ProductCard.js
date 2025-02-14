import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './ProductCard.css';

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <div className="card-actions">
        <Link to={`/view/${product.id}`} className="icon">
          <FontAwesomeIcon icon={faEye} />
        </Link>
        <Link to={`/update/${product.id}`} className="icon">
          <FontAwesomeIcon icon={faEdit} />
        </Link>
        <span className="icon" onClick={() => onDelete(product.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
