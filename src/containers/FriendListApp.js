import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import { addFriend, deleteFriend, starFriend } from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';
import Pagination from '../components/Pagination';

class FriendListApp extends Component {

  constructor() {
    super();
    this.state = {
      currentPage: 1,
      listPerPage: 2
    };
    this.onPagerClick = this.onPagerClick.bind(this);
  }

  componentDidUpdate() {
    const indexOfLastItem = this.state.currentPage * this.state.listPerPage;
    const indexOfFirstItem = indexOfLastItem - this.state.listPerPage;
    const currentList = this.props.friendlist.friendsById.slice(indexOfFirstItem, indexOfLastItem);
    if (this.state.currentPage > 1 && currentList.length === 0) {
      this.setState({
        currentPage: this.state.currentPage - 1 
      })
    }
  }


  onPagerClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {

    const { currentPage, listPerPage } = this.state;
    const { friendlist: { friendsById } } = this.props;
    const totalPageLength = friendsById.length;

    // Logic for displaying Friend list items per page
    const indexOfLastItem = currentPage * listPerPage;
    const indexOfFirstItem = indexOfLastItem - listPerPage;
    const currentList = friendsById.slice(indexOfFirstItem, indexOfLastItem);
  
    // creating id, to be passed as props to AddFriendInput
    const newId = friendsById[totalPageLength - 1].id + 1;

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend
    };

    return (
      <div>
        <div className={styles.friendListApp}>
          <h1>The FriendList</h1>
          <AddFriendInput addFriend={actions.addFriend} newId={newId} />
          <FriendList friends={currentList} actions={actions} />
        </div>
        {
          friendsById.length > 2 && <Pagination
            totalItemsCount={totalPageLength}
            activePage={currentPage}
            itemsCountPerPage={this.state.listPerPage}
            pagerClick={this.onPagerClick} />
        }

      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend
})(FriendListApp)
