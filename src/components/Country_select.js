import React, { Component } from 'react'
import Select from 'react-select';


class CountrySelect extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            leagueSelect: 'de'
        }
    }

    onSelectChange(e) {
        if(e === null) {
            return;
        }
        this.setState({
            leagueSelect: e.value,
        });

        this.props.leagueSelectChangeHandle(e);
        
        
        

    }

    render () {
        var options = [
        { value: 'de', label: 'Bundesliga' },
        { value: 'en', label: 'Premier League' },
        { value: 'fr', label: 'Ligue 1' },
        { value: 'es', label: 'Primera Division' },
        { value: 'it', label: 'Serie A' },
        ];


        


        return (
            <div className="country_select row">
                <div className="col-md-8 col-md-offset-2">
                    <Select
                    name="form-field-name"
                    value={this.state.leagueSelect}
                    onChange={(e)=> this.onSelectChange(e)}
                    options={options}
                    />
                </div>
                
            </div>
        );
    }
}

export default CountrySelect;