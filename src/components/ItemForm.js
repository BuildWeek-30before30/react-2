import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/actions';
// import ToggleComplete from '../components/toggleComplete';

function ItemForm(props) {
  const [itemObj, setItemObj] = useState(
    {
      name: '',
      description: '',
      deadline: '',
      complete: false
    }
  )

  const handleInputChange = event => {
    setItemObj({
      ...itemObj,
      [event.target.name]: event.target.value
    });
  };

  const handleAddItem = event => {
    event.preventDefault();
    props.addItem(itemObj);
    setItemObj({
      name: '',
      description: '',
      deadline: '',
      completed: ''
    });
  };


  return (
    <form className="add-item-form" onSubmit={handleAddItem}>
      <h3>Add new Item</h3>
      <input
        className="input"
        value={itemObj.name}
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleInputChange}
      />
      <input
        className="input"
        value={itemObj.description}
        name="dexcription"
        type="text"
        placeholder="description"
        onChange={handleInputChange}
      />
      <input
        className="input"
        value={itemObj.deadline}
        name="deadline"
        type="text"
        placeholder="deadline"
        onChange={handleInputChange}
      />
      <button type="submit">
        Add New Item
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { addItem }
)(ItemForm);