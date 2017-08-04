import React from 'react';


const Fixtures = (props) =>  {
    if (props.fixtures.length === 0 ) {
        return <div>No team selected</div>;
    }
    const next_fixtures = props.fixtures.map((fix, i) => {
        if (i <= 5){
            return (
                <tr key={fix.date} className="fixture-item fixture-table-head">
                    
                        <td><strong>{fix.date}</strong></td>
                        <td>{fix.homeTeamName}</td>
                        <td>{fix.awayTeamName}</td>
                    
                </tr>
            );
        }
        
    });
    return (
        <div className="col-md-8">
            <div className="fixtures-header">
                <p>Team's Next Fixtures</p><br />
            </div>
            <table className="table table-striped text-center">
                <tbody>
                    <tr>                 
                        <th>Date</th>
                        <th>Home</th>
                        <th>Away</th>
                    </tr>
                        {next_fixtures}
                </tbody>
            </table>
        </div>
    );
}

export default Fixtures;