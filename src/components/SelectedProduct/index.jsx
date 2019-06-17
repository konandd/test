import React from 'react';
import { Link } from 'react-router-dom';
import products from '../products';
import Breadcrumb from '../Breadcrumb';


const SelectedProduct = (props) => {
  const { name } = props.match.params;
  const { id } = props.match.params;
  const laptops = products.get(name, id);
  return (
    <div>
      <Breadcrumb />
      <h1>{laptops.name}</h1>
      <div className="description">{laptops.text}</div>
      <Link to={`/${name}`}>Назад</Link>
    </div>
  );
};

export default SelectedProduct;
