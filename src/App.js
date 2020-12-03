import './App.css';
import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import RegisterAndLoginPage from './pages/register-and-login/register-and-login.component.jsx'
import Header from './components/header/header.component.jsx'
import CheckoutPage from './pages/checkout/checkout.component'

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

import {selectCurrentUser} from './redux/user/user.selector'
import {createStructuredSelector} from 'reselect'


class App extends React.Component {
  unsubscribeFromAuth = null
  
  componentDidMount(){
    const {setCurrentUser} = this.props;
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          })
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route exact path='/checkout' component={CheckoutPage}></Route>
        <Route exact path='/login' render={() => this.props.currentUser ? (<Redirect to='/'/>):(<RegisterAndLoginPage />)}></Route>
      </Switch>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
    setCurrentUser: user => dispatch(setCurrentUser(user)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
