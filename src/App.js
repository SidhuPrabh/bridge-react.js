import React, { Component } from 'react';
import classes from './App.css';

import { Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Search from './containers/Search/Search';
import SearchResult from './containers/SearchResults/SearchResults';
import RegisterPro from './containers/RegisterPro/RegisterPro';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/searchResult/:cat/:city" exact component={SearchResult} />
        <Route path="/registerPro" exact component={RegisterPro} />
        <Route path="/" component={Search} />
      </Switch>
    );
    return (
      <div className={classes.App}>
        <NavigationBar/>
        {routes}
      </div>
    );
  }
}

export default App;
