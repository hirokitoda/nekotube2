import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Ysearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyAypMwkSgPExT_Sm1e6ckqlgG8GqysFxkY'

Ysearch({key: YOUTUBE_API_KEY, term: '猫　きゅうり'}, (data) => {
  console.log(data);
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
