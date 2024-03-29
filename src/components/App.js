import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faUser,
  faAngleDown,
  faAddressCard,
  faBackward,
  faEnvelope,
  faPhone,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import  Resume  from '../components/resume/Resume';
import Nav from '../components/nav/Nav';
import MainPage from '../components/mainPage/MainPage';
import Footer from '../components/footer/Footer';
import AboutMe from '../components/about/About';
library.add(fab, faUser, faAngleDown, faAddressCard, faBackward, faEnvelope, faPhone, faHome);

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Route exact path='/' component={MainPage} />
        <Route path='/resume' component={Resume} />
        <Route path='/aboutMe' component={AboutMe} />
        <Footer />
      </Router>
    </>
  );
}
