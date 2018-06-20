import React, { Component } from 'react';
import About from './components/about/About.js';
import Jobs from './components/jobs/Jobs.js';

class App extends Component {
  render() {
    return (
      <div>
        <About />
        <Jobs />
      </div>
    );
  }
}

export default App;
