import React, { Component } from 'react'

class Table extends Component {

    render () {
        var team = this.props.leagueData.map((team, i) => {
            return (
                <li onClick={() => this.props.onTeamClick(team._links.team.href)} 
                className="list-group-item" 
                key={team.teamName}>
                    <span className="pull-left">{i+1}</span> {team.teamName} <span className="pull-right"> {team.points}</span>
                </li>
            );
            }
        )


        return (
            <div className="col-md-4 league_table">
                <span className="col-title">Current standings</span>
                <ul className="list-group">
                    {team}
                </ul>
            </div>
        );
    }
}

export default Table;