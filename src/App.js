import React, { Component } from 'react';
import './App.css';
import 'react-select/dist/react-select.css';


/* Import components */
import Table from './components/Table';
import CountrySelect from './components/Country_select';
import TeamDetail from './components/Team_detail';
import Fixtures from './components/Fixtures';
import Banner from './components/Banner';
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
      teamFixtures: [],
      teamDetail: [],
    };
    this.urls = {
      de: 'http://api.football-data.org/v1/competitions/452/',
      de2: 'http://api.football-data.org/v1/competitions/453/',
      en: 'http://api.football-data.org/v1/competitions/445/',
      fr: 'http://api.football-data.org/v1/competitions/450/',
      es: 'http://api.football-data.org/v1/competitions/455/',
      it: 'http://api.football-data.org/v1/competitions/456/',
    };
    this.leagueSelectChangeHandle = this.leagueSelectChangeHandle.bind(this);
    this.getLeagueData = this.getLeagueData.bind(this);
    this.getTeamFixtures = this.getTeamFixtures.bind(this);
    this.getTeamDetail = this.getTeamDetail.bind(this);

    this.getLeagueData('de');
    
  }
  leagueSelectChangeHandle(e) {
    //console.log(e.value);
    this.setState({
      leagueSelect: e.value,
    });
    this.getLeagueData(e.value);

  }

  componentDidMount() {
    if (this.state.leagueData.length === 0){
      this.getLeagueData(this.state.leagueSelect);
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
        break;
      case 'de2':
        base_url = this.urls.de2 + '/leagueTable'; 
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
      //console.log(data);
      this.setState({
        leagueData: data.standing,
        leagueCaption: data.leagueCaption,
        leagueMatchDay: data.matchday,

      });
      
      }.bind(this));
    });
  }

  getTeamFixtures(team_base_url) {
    let url = team_base_url + '/fixtures';
    
    var myHeaders = new Headers();
    myHeaders.append("X-Auth-Token", this.API_KEY);
    myHeaders.append("Content-Type", "text/plain")
    
    var myInit = { method: 'GET',
                  headers: myHeaders,
                  cache: 'default' };

    fetch(url, myInit).then((res) => {
      res.json().then(function(data) {  
      //console.log(data);
      this.setState({
        teamFixtures: data.fixtures

      });
      
      }.bind(this));
    });

  }

  getTeamDetail(team_base_url){
    let url = team_base_url + '/players';

    var myHeaders = new Headers();
    myHeaders.append("X-Auth-Token", this.API_KEY);
    myHeaders.append("Content-Type", "text/plain")
    
    var myInit = { method: 'GET',
                  headers: myHeaders,
                  cache: 'default' };

    fetch(url, myInit).then((res) => {
      res.json().then(function(data) {  
      //console.log(data);
      this.setState({
        teamDetail: data.players

      });
      
      }.bind(this));
    });
  }

  handleOnTeamClick(team_base_url) {
    //console.log("handleOnTeamClick" , team_base_url);

    this.setState({
      teamId: team_base_url,
    });
    this.getTeamFixtures(team_base_url);
    this.getTeamDetail(team_base_url);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>et bim ...le foot !</h2>
        </div>
        <div className="App-intro">
        <Banner leagueSelect={this.state.leagueSelect}/>
        </div>
        <section>
          <CountrySelect leagueSelect={this.state.leagueSelect} leagueSelectChangeHandle={this.leagueSelectChangeHandle}/>
        </section>
        <div className="row">
          <div className="row">
          <div className="matchday col-md-4">
          Matchday in the league:<br/> <strong>{this.state.leagueMatchDay} </strong>
          </div>
        </div>
        </div>
        <div className="row">
          <br />
          <Table leagueData={this.state.leagueData} teamId={this.state.teamId} onTeamClick={(e) => this.handleOnTeamClick(e)}/>
          

          <Fixtures fixtures={this.state.teamFixtures} matchday={this.state.leagueMatchDay} team_base_url={this.state.teamId}/>
          <TeamDetail teamDetail={this.state.teamDetail}/>
        
          
        </div>
      </div>
    );
  }
}

export default App;
