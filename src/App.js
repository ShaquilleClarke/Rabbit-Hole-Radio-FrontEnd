import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import FormContainer from './Components/FormContainer.js'
import NavBar from './Components/NavBar.js'
import Home from './Components/Home.js'
import ProfileContainer from './ProfileComponents/ProfileContainer.js'
import './style.css'
import './ProfileComponents/App.css'
// import AstroBoy from './ProfileComponents/AstroBoy.mp4'


class App extends React.Component {

  state={
    user: {
      id: 0,
      username: "",
      episodes: []
    },
    token: ""
  }

  componentDidMount() {
    if (localStorage.token) {
      fetch('http://localhost:3000/persist', {
        headers: {
          "Authorization": `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResp)
    }
  }

  handleResp = (resp) => {
    if (resp.user) {
      localStorage.token = resp.token
      this.setState({
        user: resp.user,
        token: resp.token
      }, () => {
        this.props.history.push("/profile")
      })
    } else {
      alert(resp.error)
    }
  }

  addNewEpisode = (epData) => {

    this.setState({
      user: {
        ...this.state.user,
        episodes: [...this.state.user.episodes, epData]
      }
    })
  }

  
  deleteEpisode = (epData) => {
    fetch(`http://localhost:3000/episodes/${epData}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json())
    .then(resp => {
      let filteredArray = this.state.user.episodes.filter(keepThese => {
        return keepThese.id !== resp.id
      })
      this.setState({
        user: {
          ...this.state.user,
          episodes: filteredArray
        }
      })
    })
  }
    


  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResp)


  }

  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
    .then(r => r.json())
    .then(this.handleResp)
  }




  

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <FormContainer formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <FormContainer formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  renderProfile = (routerProps) => {
    return <ProfileContainer user={this.state.user} token={this.state.token} addNewEpisode={this.addNewEpisode} deleteEpisode={this.deleteEpisode} handleResp={this.handleResp} />
  }

  render(){
    console.log(this.state.user);
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/" exact render={() => <Home /> } />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
