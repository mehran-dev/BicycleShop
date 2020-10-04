import React from 'react';

import './App.css';
import Footer from './components/header-footer/footer';
import Header from './components/header-footer/header';
import Tamas from './pages/tamas/tamas';
import Home from './pages/home/home';
import Products from './pages/products/products';
import Buy from './pages/buy/buy';

import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header>

      </Header>


      <Switch>
        <Route from="/tamas-ba-ma" exact component={Tamas} />
        <Route from="/products" exact component={Products} />
        <Route from="/buy" exact component={Buy} />
        <Route from="/home" exact component={Home} />
        <Route from="/" exact component={Home} />

      </Switch>
      <Footer>

      </Footer>

    </div>
  );
}

export default App;
