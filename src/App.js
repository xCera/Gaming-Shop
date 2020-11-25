import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx'
import Shop from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/genre/:genreId' component={Shop}></Route>
      </Switch>
    </div>
  );
}

export default App;
