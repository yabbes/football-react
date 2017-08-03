import React, { Component } from 'react';
import './App.css';

/* Import components */
import Table from './components/Table';
import CountrySelect from './components/Country_select';
import TeamDetail from './components/Team_detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Futbalium</h2>
        </div>
        <p className="App-intro">
        Contents to be added
        </p>
        <CountrySelect />
        <Table />
        <br />
        <TeamDetail />
      </div>
    );
  }
}

export default App;
