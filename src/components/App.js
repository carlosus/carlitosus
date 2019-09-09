import React from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from '../containers/Home';
import NavBar from './navBar/NavBar';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home}/>
    </Router>
  );
}
