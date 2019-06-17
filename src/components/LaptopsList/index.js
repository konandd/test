import React from 'react';
import { Link } from 'react-router-dom';
import products from '../products';

const LaptopsList = (props) => {
  const key = props.match.params.name;
  return (
    <div>
      <ul>
        { products.allProducts(key).map(p => (<li key={p.id}><Link to={`/${key}/${p.id}`}>{p.name}</Link></li>)) }
      </ul>
      <Link to="/">Назад</Link>
    </div>
  );
};

export default LaptopsList;
