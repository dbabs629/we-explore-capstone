import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import { FirebaseDatabaseProvider, FirebaseDatabaseNode } from "@react-firebase/database";
import LoginScreen from './Screens/Login';

class App extends Component {
  render() {
    return (
      <div>
        <LoginScreen></LoginScreen>
        {/* <FirebaseDatabaseProvider firebase={firebase} {...firebase}>
          <div>
            <FirebaseDatabaseNode
              path="users/">
              </FirebaseDatabaseNode>
              </div>
    </FirebaseDatabaseProvider> */}
      </div>
    );
  }
}

export default App;
