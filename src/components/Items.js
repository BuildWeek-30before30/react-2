import React, { useEffect } from 'react';
import { connect } from 'react-redux';


const Items = ({ item, list, lists }) => {
  console.log(props, 'Items.js, line 4, props');
  return (
    <div className="items">
      {/* {props.items.map(item => (
        <div id={itemID.id}
      ))} */}
    </div>
  )
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps)(Items);