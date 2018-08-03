import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Ysearch from 'youtube-api-search';
import Body from './components/Body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';

const YOUTUBE_API_KEY = 'AIzaSyAypMwkSgPExT_Sm1e6ckqlgG8GqysFxkY'

class App extends Component {

  state = { videos: [],
            selectedVideo: null }

  componentDidMount(){
    Ysearch({key: YOUTUBE_API_KEY,term:'猫　きゅうり'}, (data) => {this.setState({videos:data, selectedVideo: data[2]});
    });
  }

  onVideoClickedHandler = (video) => {
    this.setState({ selectedVideo: video })
  }

  onKeywordChangedHandler = (keyword) => {
    let newTerm ='猫' + keyword;
    if(keyword === ''){
      newTerm = '猫　きゅうり';
    }

    Ysearch({key: YOUTUBE_API_KEY, term: newTerm}, (data)=> {
      this.setState({videos: data, selectedVideo: data[0]})
    });
  }

    render() {
      return (
        <div className="App">
          <Header onKeywordChanged={this.onKeywordChangedHandler} />
          <Body>
            <Video video={this.state.selectedVideo} />
            <List videos={this.state.videos}
                  onVideoClicked={this.onVideoClickedHandler}
                  selectedVideo={this.state.selectedVideo}
                   />
          </Body>
        </div>
    );
  }
}

export default App;
