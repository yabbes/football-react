import React from 'react';

const TeamDetail = (props) => {

    if(props.teamDetail.length === 0 || !props.teamDetail){
        return (
            <div className="col-md-8">
                <span className="col-title">No players for team</span>
                 </div>
        );
    }

    const player = props.teamDetail.map((p, i) => {
        return (
            <li key={p.dateOfBirth+i}>
                {p.jerseyNumber} {p.name} - {p.position} - {p.nationality}
            </li>
        );
    })
    //TODO:
    //console.log(props.teamDetail);

    return (
        <div className="col-md-8 team_detail">
            <span className="col-title">Players of team</span>
            <ul>
                {player}
            </ul>
        </div>
    );
}

export default TeamDetail;