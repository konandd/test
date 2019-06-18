import React from 'react';
import { Link } from 'react-router-dom';
import products from '../products';

const LaptopsList = ({ laptops, ...props }) => {
  const key = props.location.pathname.slice(1);
  // eslint-disable-next-line no-console
  console.log(laptops[key]);
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
