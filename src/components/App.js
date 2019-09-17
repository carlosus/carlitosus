import React from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from '../containers/Home';
import NavBar from './navBar/NavBar';
import Landing from './landing/Landing';

export default function App() {
  return (
    <>
    <Landing />
  
    </>
  );
}

{/* // <Router>
   
    //   <Route exact path="/" component={Home}/>
    // </Router> */}
