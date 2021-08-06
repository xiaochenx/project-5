import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory ,withRouter} from 'react-router-dom';
import Navbar from './containers/Navbar'
import Home from './containers/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import YourListings from './containers/YourListings'
import Listing from './components/Listing';
import AllListings from './containers/AllListings'
import PublicListing from './components/PublicListing';
import Comments from './components/Comments';
import GetStarted from './containers/GetStarted';



function App(props) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  //const history = useHistory()
  const [loginError, setLoginError] = useState("")
console.log(props)
const history=props.history
  useEffect(() => {
    // auto-login
    fetch('/me')
    .then(response => {
      if(response.ok) {
        response.json()
        .then( user => {
          setLoggedIn(true)
          setUser(user)
        })
      }else{
        setLoginError(response.statusText)
      }
    })
  }, [])


  const LoginUser= (u) => {
    // console.log(u)
    if(u.error == "Invalid username or password"){
      setLoggedIn(false)
      alert(loginError);
    }else if (u.error == "Internal Server Error"){
      setLoggedIn(false)
      alert("Please make sure the signup form is correct. It should include a username, and matching passwords.");
    }else{
      setLoggedIn(true)
      setUser(u)
     history.push('/')
    }
  }

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(() => {
      console.log('logged out')
      setLoggedIn(false)
      setUser({})
    }) 
    history.push('/')
  }


  return (
    <div>
     <Navbar user={user} loggedIn={loggedIn} logoutUser={logoutUser} loginError={loginError}/> 
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/signup" render={routerProps => <Signup {...routerProps} loginUser={LoginUser}/>}/>
       <Route exact path="/login" render={routerProps => <Login {...routerProps} loginUser={LoginUser} />}/>
       <Route exact path="/listings" render={routerProps => <YourListings {...routerProps} user={user} loggedIn={loggedIn}/>}/>
       <Route exact path="/listings/:id"  component={Listing}/>
       <Route exact path="/listing/all"  component={AllListings}/>
       <Route exact path="/listing/:id"  component={PublicListing}/>
       <Route exact path="/listings/:id/comments"  component={Comments}/>
       <Route exact path="/getstarted"  component={GetStarted}/>
     </Switch>
     
    </div>
  );
}

export default withRouter(App);
