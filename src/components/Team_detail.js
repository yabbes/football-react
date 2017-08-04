import React from 'react';

const TeamDetail = (props) => {

    if(props.teamDetail.length === 0 || !props.teamDetail){
        return (
            <div>No players for team </div>
        );
    }

    const player = props.teamDetail.map((p) => {
        return (
            <li key={p.dateOfBirth}>
                {p.jerseyNumber} {p.name} - {p.position}
            </li>
        );
    })
    //TODO:
    //console.log(props.teamDetail);

    return (
        <div className="col-md-8 team_detail pull-right">
            <ul>
                {player}
            </ul>
        </div>
    );
}

export default TeamDetail;