import React from 'react';


const Fixtures = (props) =>  {
    if (props.fixtures.length === 0 ) {
        return <div>No team selected</div>;
    }
    const next_fixtures = props.fixtures.map((fix, i) => {
        if (i <= 5){
            return (
                <tr key={fix.date} className="fixture-item">
                    <td><strong>{fix.date}</strong></td>
                    <td>{fix.homeTeamName}</td>
                    <td>{fix.awayTeamName}</td>
                     
                </tr>
            );
        }
        
    });
    return (
        <div>
            <div className="fixtures-header">
                <p>Next Fixtures</p><br />
            </div>
            <table className="table table-striped text-center">
                <tr>
                    <th>Date</th>
                    <th>Home</th>
                    <th>Away</th>
                </tr>
            {next_fixtures}
            </table>
        </div>
    );
}

export default Fixtures;