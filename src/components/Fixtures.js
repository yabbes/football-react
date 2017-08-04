import React from 'react';



const Fixtures = (props) =>  {
    if (props.fixtures.length === 0 ) {
        return (<div className="col-md-8">
            <span className="col-title">No team selected</span>
                </div>);
    }
    // eslint-disable-next-line
    const next_fixtures = props.fixtures.map((fix, i) => {
        //console.log("matchday", props.matchday);
        if ((i >= props.matchday - 1) && i < props.matchday + 5){
            let d = new Date(fix.date);
            let dmin;
            if (d.getMinutes() === 0){
                dmin = '00';
            } else {
                dmin = d.getMinutes();
            }
            //console.log(d.toString(), d.getMinutes());
            let datestring = d.getDate()  + "." + (d.getMonth()+1) + "." + d.getFullYear() + " " +
d.getHours() + ":" + dmin;
            return (
                <tr key={fix.date} className="fixture-item fixture-table-head">
                    
                        <td><strong>{datestring}</strong></td>
                        <td>{fix.homeTeamName}</td>
                        <td>{fix.awayTeamName}</td>
                    
                </tr>
            );
        }
        
    });
    return (
        <div className="col-md-8">
            <div className="fixtures-header">
                <span className="col-title">Team's Next Fixtures</span><br />
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