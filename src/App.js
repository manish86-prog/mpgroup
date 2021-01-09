import React, { Component } from 'react';

import Ref from './Ref';
import Memo from './Memo'
//import Memo2 from './Memo2'
//import logo from './logo.svg';
import './Style.css';
import Headersection from './Headersection';
import Footersection from './Footersection';
import Rightsection from './Rightsection';
import Home from './Home';
import Blog from './Blog';
import Gallery from './Gallery';
import Friends from './Friends';
import About from './About';
import Contactus from './Contactus';
import Productnew from './Productnew';
//import Getdata from './Getdata';

import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>      
      <div id="main">
        <Headersection/>
        <div id="content">
          <Rightsection/>
            <div id="left">
              <h1>Welcome to Our Website!</h1>
              {/*<Getdata/>*/}
            <div>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog"  component={Blog} />   
            <Route path="/ref"  component={Ref} />      
            <Route path="/memo" component={Memo}  />
            <Route path="/gallery"  component={Gallery}/>
            <Route path="/friends" component={Friends}/>
            <Route path="/about" component={About}/>
            <Route path="/contactus" component={Contactus}/>
			      <Route path="/productnew" component={Productnew}/>
			
            </Switch>
        </div>
      <br />
    </div>
  </div>
  <Footersection/>
</div>
</Router>
    );
  }
}
export default App;