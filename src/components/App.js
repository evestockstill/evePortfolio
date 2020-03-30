import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import  Resume  from '../components/resume/Resume';
import MainPage from '../components/mainPage/MainPage';

library.add(fab, faUser, faAngleDown);

export default function App() {
  return (
    <>
      <Router>
        <Route exact path='/' component={MainPage} />
        <Route path='/resume' component={Resume} />
       
      </Router>
    </>
  );
}
//component={() => <Redirect to={{ pathname: '/YourRoute' }} />} />
