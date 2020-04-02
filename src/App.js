import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import './style.css'

class App extends React.Component {

  state = {
    episodes: [],
    currentEpisode: null
  }

  componentDidMount() {
    console.log(this.state.episodes)
  }


  render() {
    return (
      <div>
        <h1 className="heaader" >Rabbit Hole Radio</h1>
        <NewEpisodeForm episodes={this.state.episodes} />
      </div>

    )
  }
}

export default App;
