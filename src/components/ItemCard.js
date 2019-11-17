import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, setCurrentItem }from '../actions';

const ItemCard = props => {
  const { item, deleteItem, setCurrentItem } = props;
  const onDelete = () => {
    deleteItem(item.id);
  };

  const onClickHandle = item => {
    setCurrentItem(item);
    props.history.push('/')
  }
}