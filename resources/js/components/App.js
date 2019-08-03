import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import Contact from './containers/Contact/Contact';


function App() {
  return (
    <Layout>
      <Switch>      
        <Route path="/profile" component={Profile} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>

  );
}

export default App;
