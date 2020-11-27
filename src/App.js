import './App.css';
import React from 'react'
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx'
import Shop from './pages/shop/shop.component.jsx'
import RegisterAndLoginPage from './pages/register-and-login/register-and-login.component.jsx'
import Header from './components/header/header.component.jsx'

import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
     this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    })
  }

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/genre/:genreId' component={Shop}></Route>
        <Route path='/login' component={RegisterAndLoginPage}></Route>
      </Switch>
    </div>
  );
}
}

export default App;
