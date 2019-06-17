import React from 'react';
import { Link } from 'react-router-dom';
import products from '../products';

const ProductList = () => (
  <div>
    <ul>
      {
                products.all().map(p => (
                  <li key={p}>
                    <Link to={`/${p}`}>{p}</Link>
                  </li>
                ))
            }
    </ul>
  </div>
);

export default ProductList;
