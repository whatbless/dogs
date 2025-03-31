import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
