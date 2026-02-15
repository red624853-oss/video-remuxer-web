import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage';
import ProcessingPage from './pages/ProcessingPage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/upload' component={UploadPage} />
        <Route path='/processing' component={ProcessingPage} />
        <Route path='/results' component={ResultsPage} />
      </Switch>
    </Router>
  );
}

export default App;