import React from 'react';


const Fixtures = (props) =>  {
    if (props.fixtures.length === 0 ) {
        return <div>No team selected</div>;
    }
    const next_fixtures = props.fixtures.map((fix, i) => {
        if (i <= 5){
            return (
                <div key={fix.date} className="fixture-item">
                    <strong>{fix.date}</strong>
                    {fix.homeTeamName} - {fix.awayTeamName}
                </div>
            );
        }
        
    });
    return (
        <div>
            <div className="fixtures-header">
                Fixtures<br />
            </div>
            {next_fixtures}
            
        </div>
    );
}

export default Fixtures;