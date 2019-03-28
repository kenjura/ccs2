import CharacterDetail from './components/CharacterDetail';
import CharacterList from './components/CharacterList';
import Nav from './components/Nav';
import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

const Home = () => <h2>Home Page</h2>;
const NotImplemented = () => <h2>Not Yet Implemented</h2>;

const AppRouter = () => (
  <Router>
    <div>

      <header id="header"><a href="/">CCS2</a></header>

      <Nav />

      <div id="main">      
        <Route path="/" exact component={Home} />
        <Route path="/characters/:id" component={CharacterDetail} />
        <Route path="/characters/" exact component={CharacterList} />
      </div>
    </div>
  </Router>
);

export default AppRouter;