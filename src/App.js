import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import ContactUS from './containers/ContactUS';
import Post from './containers/Post';

function App() {
  return(
    
     <Router>
     <div className="App">
      <Header />
        <Hero />
      <Switch>
       
        <Route exact path="/"  component={Home} />
        <Route path="/contact-us"  component={ContactUS}/>
        <Route path="/post/:slug" component={Post} />
        
   </Switch>
    </div>
     </Router>

  );
}

export default App;
