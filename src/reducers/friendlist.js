import * as types from '../constants/ActionTypes';

const initialState = {
  friendsById: [
    {
      id:0,
      name: 'Theodore Roosevelt',
      gender : 'Male',
      starred: true
    },
    {
      id:1,
      name: 'Abraham Lincoln',
      gender : 'Male',
      starred: false
    },
    {
      id:2,
      name: 'George Washington',
      gender : 'Male',
      starred: false
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND: 
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            id: action.data.id,
            name: action.data.name,
            gender: action.data.gender
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => item.id !== action.id)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find((item, index) => item.id === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };

    default:
      return state;
  }
}
