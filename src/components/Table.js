import React, { Component } from 'react'

class Table extends Component {

    render () {
        var team = this.props.leagueData.map((team, i) => {
            return (
                <li onClick={() => this.props.onTeamClick(team._links.team.href)} 
                className="list-group-item" 
                key={team.teamName}>
                    {i+1} {team.teamName}
                </li>
            );
            }
        )


        return (
            <div className="col-md-4 league_table">
                <ul className="list-group">
                    {team}
                </ul>
            </div>
        );
    }
}

export default Table;