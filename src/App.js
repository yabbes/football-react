import React, { Component } from 'react';
import './App.css';
import 'react-select/dist/react-select.css';


/* Import components */
import Table from './components/Table';
import CountrySelect from './components/Country_select';
import TeamDetail from './components/Team_detail';
import dataMockup from './json_mockup';



class App extends Component {
  constructor(props) {
    super(props);
    this.API_KEY = "0867e9eab82b480a9a6ab803431aa415";
    this.state = {
      leagueSelect: 'de',
      leagueData: [],
      leagueCaption: null,
      leagueMatchDay: null,
      teamSelect: false,
      teamId: null,
    };
    
  }
  leagueSelectChangeHandle(e) {
    console.log(e.value);
    this.setState({
      leagueSelect: e.value,
    });

  }

  componentDidMount() {
    if (this.state.leagueData.length === 0){
      this.getLeagueData('de');
    }
  }
  getLeagueData(country) {
    console.log(dataMockup);
    this.setState({
      leagueData: dataMockup.standing,
      leagueCaption: dataMockup.leagueCaption,
      leagueMatchDay: dataMockup.matchday,

    });
    return;
    /* deaktiviert für dev
    var url = 'http://api.football-data.org/v1/soccerseasons/430/leagueTable/?matchday=1';
    var url2 = 'http://api.football-data.org/v1/teams/66';

    var myHeaders = new Headers();
    myHeaders.append("X-Auth-Token", this.API_KEY);
    myHeaders.append("Content-Type", "text/plain")
    
    var myInit = { method: 'GET',
                  headers: myHeaders,
                  cache: 'default' };

    fetch(url, myInit).then((res) => {
      res.json().then(function(data) {  
      console.log(data);  
      });
    });
    */

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Futbalium</h2>
        </div>
        <p className="App-intro">
        Contents to be added
        </p>
        <CountrySelect leagueSelect={this.state.leagueSelect} leagueSelectChangeHandle={this.leagueSelectChangeHandle}/>
        <Table leagueData={this.state.leagueData}/>
        <br />
        <TeamDetail />
      </div>
    );
  }
}

export default App;
