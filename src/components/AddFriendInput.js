import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render() {
    return (
      <div>
        <input
          type="text"
          autoFocus="true"
          name="name"
          className={classnames('form-control', styles.addFriendInput)}
          placeholder="Type the name of a friend"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.inputSubmit.bind(this)} />
        <select
          name="gender"
          ref="selectGender"
          value={this.state.gender}
          className="form-control"
          onChange={this.handleChange.bind(this)}
        >
          <option value="Select">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <button className="btn btn-primary" onClick={this.formSubmit.bind(this)}>Add</button>
      </div>
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      id: this.props.newId,
      name: this.props.name || '',
      gender: ''
    };
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  }
  
  inputSubmit(e){
    if (e.which === 13) {
      this.refs.selectGender.focus();
    }
  }

  formSubmit(e) {
    
    let { id, name, gender } = this.state;
    name = name.trim();

    //if (e.which === 13) {
      this.props.addFriend({ id, gender, name });
      this.setState({ id: id + 1, name: '', gender: 'select' });
    //}
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
