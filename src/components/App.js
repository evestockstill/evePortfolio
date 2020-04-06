import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUser, faAngleDown, faAddressCard, faBackward } from '@fortawesome/free-solid-svg-icons';
import  Resume  from '../components/resume/Resume';
import MainPage from '../components/mainPage/MainPage';
import AboutMe from '../components/about/About';
// import Nav from '../components/nav/Nav';

library.add(fab, faUser, faAngleDown, faAddressCard, faBackward);

export default function App() {
  return (
    <>
      <Router>
        {/* <Nav /> */}
        <Route exact path='/' component={MainPage} />
        <Route path='/resume' component={Resume} />
        <Route path='/aboutMe' component={AboutMe} />
       
      </Router>
    </>
  );
}
//component={() => <Redirect to={{ pathname: '/YourRoute' }} />} />
