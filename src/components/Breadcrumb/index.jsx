import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ pathname }) => {
  // eslint-disable-next-line no-console
  console.log(pathname);
  return (
    <div className="breadcrumb"> {
        pathname.split('/').map(p => (
          <Link to={`/${p}`}>go to {p}</Link>
        ))
      }
    </div>
  );
};
export default Breadcrumb;
