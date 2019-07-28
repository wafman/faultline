import React from 'react';
import '../app.scss';
import Header from './header.js';
import Main from './main.js';
import AboutUs from './about-us.js';
import Media from './media.js'
import Footer from './footer.js';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/about-us' component={AboutUs}/>
        <Route path='/media' component={Media}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
