import React from 'react';

const Breadcrumb = (props) => {
  const paths = props.path;
  // eslint-disable-next-line no-console
  console.log(paths);
  return (<div>{ paths }</div>);
};

export default Breadcrumb;
