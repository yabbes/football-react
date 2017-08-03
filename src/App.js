import React, { Component } from 'react';
import './App.css';
import 'react-select/dist/react-select.css';


/* Import components */
import Table from './components/Table';
import CountrySelect from './components/Country_select';
import TeamDetail from './components/Team_detail';
//import dataMockup from './json_mockup';



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
    this.urls = {
      de: 'http://api.football-data.org/v1/competitions/452/',
      en: 'http://api.football-data.org/v1/competitions/445/',
      fr: 'http://api.football-data.org/v1/competitions/450/',
      es: 'http://api.football-data.org/v1/competitions/455/',
      it: 'http://api.football-data.org/v1/competitions/456/',
    };
    this.leagueSelectChangeHandle = this.leagueSelectChangeHandle.bind(this);
    this.getLeagueData = this.getLeagueData.bind(this);
    this.getLeagueData('de');
    
  }
  leagueSelectChangeHandle(e) {
    console.log(e.value);
    this.setState({
      leagueSelect: e.value,
    });
    this.getLeagueData(e.value);

  }

  componentDidMount() {
    if (this.state.leagueData.length === 0){
      //this.getLeagueData(this.state.leagueSelect);
    }
  }
  getLeagueData(country) {
    /*console.log(dataMockup);
    this.setState({
      leagueData: dataMockup.standing,
      leagueCaption: dataMockup.leagueCaption,
      leagueMatchDay: dataMockup.matchday,

    });
    return;
    */
    let base_url;
    switch (country) {
      case 'de':
        base_url = this.urls.de + '/leagueTable'; 
        console.log("ja"); 
        break;
      case 'en':
        base_url = this.urls.en + '/leagueTable'; 
        break;
      case 'es':
        base_url = this.urls.es + '/leagueTable';  
        break;
      case 'it':
        base_url = this.urls.it + '/leagueTable';  
        break;
      case 'fr':
        base_url = this.urls.fr + '/leagueTable';  
        break;
    
      default:
        break;
    }
    
    var myHeaders = new Headers();
    myHeaders.append("X-Auth-Token", this.API_KEY);
    myHeaders.append("Content-Type", "text/plain")
    
    var myInit = { method: 'GET',
                  headers: myHeaders,
                  cache: 'default' };

    fetch(base_url, myInit).then((res) => {
      res.json().then(function(data) {  
      console.log(data);
      this.setState({
        leagueData: data.standing,
        leagueCaption: data.leagueCaption,
        leagueMatchDay: data.matchday,

      });
      
      }.bind(this));
    });

    
    

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
