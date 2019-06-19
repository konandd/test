import React from 'react';

const Breadcrumb = ({ history, name, id }) => (
  <div className="breadcrumb">
    <button type="button" onClick={() => (history.push('/'))}>go to main</button>
    <button type="button" onClick={() => (history.push(`/${name}`))}>laptops {name}</button>
    {id ? <button type="button" onClick={() => (history.push(`/${name}/${id}`))}>{name} {id}</button> : ''}
  </div>
);
export default Breadcrumb;
