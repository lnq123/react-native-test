import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  TODO_UPDATE,
  TODO_CREATE,
  TODO_FETCH_SUCCESS,
  TODO_SAVE_SUCCESS
} from './types';

export const todoUpdate = ({ prop, value }) => {
  return {
    type: TODO_UPDATE,
    payload: { prop, value }
  };
};

export const todoCreate = ({ event , shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/todos`)
      .push({ event, shift })
      .then(() => {
        dispatch({ type: TODO_CREATE });
        Actions.todoList({ type: 'reset' });
      });
  };
};

export const todoFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/todos`)
      .on('value', snapshot => {
        dispatch({ type: TODO_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const todoSave = ({ event,shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/todos/${uid}`)
      .set({ event, shift })
      .then(() => {
        dispatch({ type: TODO_SAVE_SUCCESS });
        Actions.todoList({ type: 'reset' });
      });
  };
};

export const todoDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/todos/${uid}`)
      .remove()
      .then(() => {
        Actions.todoList({ type: 'reset' });
      });
  };
};
