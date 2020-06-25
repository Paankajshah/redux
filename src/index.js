import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
  loading: false,
  users: [],
  error: ""
};

// const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
// const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
// const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// const fetchUsersRequest = () => {
//   return {
//     type: FETCH_USERS_REQUEST
//   };
// };

// const fetchUsersSuccess = users => {
//   return {
//     type: FETCH_USERS_SUCCESS,
//     payload: users
//   };
// };

// const fetchUsersFailure = error => {
//   return {
//     type: FETCH_USERS_FAILURE,
//     payload: error
//   };
// };

const fetchUsers = () => {
  return function(dispatch) {
    dispatch({
      type: "FETCH_USERS_REQUEST"
    });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        // response.data is the users
        const users = response.data.map(user => user.id);
        dispatch({
          type: "FETCH_USERS_SUCCESS",
          payload: users
        });
      })
      .catch(error => {
        // error.message is the error message
        dispatch({
          type: 'FETCH_USERS_FAILURE',
          payload: error.message
        });
      });
  };
};
// store.dispatch(fetchUsers());


const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "FETCH_USERS_SUCCESS":
      return {
        loading: false,
        users: action.payload,
        error: ""
      };
    case "FETCH_USERS_FAILURE":
      return {
        loading: false,
        users: [],
        error: action.payload
      };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
