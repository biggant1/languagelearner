import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'Pages/Home/Home'
import Game from 'Pages/Game/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
