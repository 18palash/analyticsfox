import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Edit from './components/Edit';
import './App.css';

function App() {
  return(
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component= {Login} />
        <Route path="/register" component= {Register} />
        <Route path="/home" component= {Home} />
        <Route path="/edit" component= {Edit} />
      </div>
    </BrowserRouter>
  )
}
export default App;
