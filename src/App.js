import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
    </Switch>
    
  );
}

export default App;
