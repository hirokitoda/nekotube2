import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Ysearch from 'youtube-api-search';
import Body from './components/Body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';

const YOUTUBE_API_KEY = 'AIzaSyAypMwkSgPExT_Sm1e6ckqlgG8GqysFxkY'

class App extends Component {

state = { videos: [] }


componentDidMount(){
  Ysearch({key: YOUTUBE_API_KEY,term:'猫　きゅうり'}, (data) => {this.setState({videos:data});
  });
}

  render() {
    return (
      <div className="App">
        <Header />
        <Body>
          <Video video={this.state.videos[1]} />
          <List videos={this.state.videos} />
        </Body>
      </div>
    );
  }
}

export default App;
