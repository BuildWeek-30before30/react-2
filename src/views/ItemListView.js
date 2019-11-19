import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../actions/actions';
import ItemList from '../components/ItemList';
import ItemForm from '../components/ItemForm';

const ItemListView = (props) => {
  useEffect((props) => {
    props.fetchList()
  }, [])

    return (
      <div className="ItemListView_wrapper">
        <ItemList items={props.list} />
        <ItemForm />
      </div>
    )
}

const mapStateToProps = state => {
  return {
    items: state.items,
    fetchItems: state.fetchItems,
    error: state.error
  }
};

export default connect(
  mapStateToProps,
  { fetchList }
)(ItemListView);