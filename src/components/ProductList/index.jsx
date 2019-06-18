import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ firms }) => (
  <div>
    <ul>
      {
                Array.from(firms).map(p => (
                  <li key={p}>
                    <Link to={`/${p}`}>{p}</Link>
                  </li>
                ))
            }
    </ul>
  </div>
);
export default ProductList;
