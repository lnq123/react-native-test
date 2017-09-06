import React from 'react';
import firebase from 'firebase';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
import TodoEdit from './TodoEdit';

const RouterComponent = () => {
  const logUserOut = () => {
    firebase.auth().signOut()
      .then(() => {
        Actions.auth();
      });
};
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
      <Scene
      onRight={() => Actions.todoCreate()}
      rightTitle="Add"
      key="todoList"
      component={TodoList} 
      title="todos"
      onLeft={() => logUserOut()}
      leftTitle="Log out"
    />
        <Scene key="todoCreate" component={TodoCreate} title="Create Todo" />
        <Scene key="todoEdit" component={TodoEdit} title="Edit Todo" />
        
      </Scene>
    </Router>
  );
};

export default RouterComponent;
