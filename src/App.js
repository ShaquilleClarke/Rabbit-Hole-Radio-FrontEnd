import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import FormContainer from './Components/FormContainer.js'
import NavBar from './Components/NavBar.js'
import Home from './Components/Home.js'
import ProfileContainer from './ProfileComponents/ProfileContainer.js'
import './style.css'

class App extends React.Component {

  state={
    user: {
      id: 0,
      username: "",
      episodes: []
    }
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
    .then((resp) => {

      if (resp.id) {
        this.setState({
          user: resp
        }, () => {
          this.props.history.push("/profile")
        })
      } else {
        alert(resp.error)
      }

    })


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
    .then((registeredUser) => {

      this.setState({
        user: registeredUser
      }, () => {
        this.props.history.push("/profile")
      })

    })



  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <FormContainer formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <FormContainer formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  renderProfile = (routerProps) => {
    return <ProfileContainer user={this.state.user}/>
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
