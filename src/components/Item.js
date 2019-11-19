import React from 'react';

const Item = props => {
  return (
    <div>
      <h3>My List</h3>
      <li><strong>{props.item.name}</strong></li>
      <li><strong>{props.item.description}</strong></li>
      <li><strong>{props.item.deadline}</strong></li>
      <li><strong>{props.item.completed}</strong></li>
    </div>
  )
};

export default Item;