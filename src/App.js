import React, {Component} from 'react';
import './App.css';
import { Provider } from "react-redux";
import { Route, Switch } from "react-router"
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store"

import './index.css';
// import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Container} from "semantic-ui-react"
import Login from "./container/login";
import Post from "./container/post";
import Navebar from "./navbar";


class App extends Component {
 
  render(){
    
      return (
        <Container>
          <br/>
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <Navebar/>
              <Switch>
                <Route exact path="/" component={Post}/>
                <Route path="/login" component={Login} />
              </Switch>
            </ConnectedRouter>
          </Provider>
        </Container>
      );
  }
}

export default App;
