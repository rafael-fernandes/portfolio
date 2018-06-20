import React, { Component } from 'react';
import About from './components/about/About.js';
import Jobs from './components/jobs/Jobs.js';
import Contact from './components/contact/Contact.js';

class App extends Component {
  render() {
    return (
      <div>
        <About />
        <Jobs />
        <Contact />
      </div>
    );
  }
}

export default App;
