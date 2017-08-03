import React, { Component } from 'react'

class Table extends Component {
    constructor(props){
        super(props);
    }
    
    render () {
        var team = this.props.leagueData.map((team, i) => {
            return (
                <li key={team.teamName}>
                    {i+1} {team.teamName}
                </li>
            );
            }
        )


        return (
            <div className="league_table">
                <ul className="col-md-4 list-group">
                    {team}
                </ul>
            </div>
        );
    }
}

export default Table;