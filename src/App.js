import logo from './logo.svg';
import './App.css';
import Homescreen from './homescreen';
import Signin from './singin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Homescreen/>
          </Route>
          <Route exact path='/login'>
            <Signin></Signin>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
