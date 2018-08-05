import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render() {
    return (      
      <form className={'form-inline ' + styles.addFriendForm}>
        <div className={classnames('form-group', styles.addFriendFormGroup)}>
          <input
            type="text"
            autoFocus="true"
            name="name"
            className={classnames('form-control', styles.addFriendInput)}
            placeholder="Type the name of a friend"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.inputSubmit.bind(this)} />
        </div>
        <div className={classnames('form-group pull-right', styles.addFriendFormGroup)}>
          <select
            name="gender"
            ref="selectGender"
            value={this.state.gender}
            className={classnames('form-control ', styles.addFriendInput, styles.addFriendSelect)}
            onChange={this.handleChange.bind(this)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button className="btn btn-success btn-block" onClick={this.formSubmit.bind(this)}>Add</button>
      </form>
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      id: this.props.newId,
      name: this.props.name || '',
      gender: 'Male'
    };
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  }

  inputSubmit(e) {
    if (e.which === 13) {
      this.refs.selectGender.focus();
    }
  }

  formSubmit(e) {
    e.preventDefault();
    let { id, name, gender } = this.state;
    name = name.trim();
    this.props.addFriend({ id, gender, name });
    
    // resetting state with updated ID 
    this.setState({ id: id + 1, name: '', gender: 'Male' });
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
