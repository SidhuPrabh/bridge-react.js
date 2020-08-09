import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Search from './containers/Search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <Search/>
      </div>
    );
  }
}

export default App;
