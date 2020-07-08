import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HackerNews from './components/HackerNews';
import Newest from './components/Newest';
import FrontNews from './components/FrontNews';
import NewComments from './components/NewComments';
import Jobs from './components/Jobs';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HackerNews}/>
          <Route path='/newest' component={Newest} />
          <Route path='/front' component={FrontNews} />
          <Route path='/newcomments' component={NewComments} />
          <Route path='/jobs' component={Jobs} />
          

        </Switch>
      </Router>
     
     
    </div>
  );
}

export default App;
