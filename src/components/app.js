import React from 'react';
import '../app.scss';
import Header from './header.js';
import Main from './main/main.js';
import AboutUs from './about-us/about-us.js';
import Media from './media.js'
import Footer from './footer.js';
import News from './news.js';
import Calendar from './calendar.js';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/about-us' component={AboutUs}/>
        <Route path='/media' component={Media}/>
        <Route path='/news' component={News} />
        <Route path='/calendar' component={Calendar}/>
      </Switch>
      </div>
      <div className="wrapper">
        <div className="push"></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
