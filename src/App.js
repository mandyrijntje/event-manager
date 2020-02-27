import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
//
import Home from "./components/Home";
//
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Home} />
        </div>
      </Provider>
    );
  }
}
export default App;
//home route should be set with 'exact' so that anything after / will lead to not the home page
