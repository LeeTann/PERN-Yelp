import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import DetailPage from './routes/DetailPage';
import { RestaurantsContextProvider } from './context/RestaurantsContext';

function App() {
  return (
    <RestaurantsContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/restaurants/:id" component={DetailPage} />
            <Route exact path="/restaurants/:id/update" component={UpdatePage} />
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>

  );
}

export default App;
