import React from 'react';
import { connect } from 'react-redux';
import { toggleComplete } from '../actions/actions';

function ToggleComplete(props) {
  return (
    <label>
      input type="checkbox" value={props.complete} onChange={props.toggle}
      <span>Completed</span>
    </label>
  );
};

function mapStateToProps(state) {
  return {
    complete: state.toggleComplete
  };
};

const mapDispatchToProps = {
  toggle: toggleComplete
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ToggleComplete)