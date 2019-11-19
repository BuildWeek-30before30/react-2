import React from 'react';
import Item from './Item';

const ItemList = props => {
  return (
    <div className="items">
      {props.items.map(item => {
        return <Item key={item.id} item={item} />
      })}
    </div>
  );
};

export default ItemList;