import React, { Component } from 'react';

class HouseFilter extends Component {
    state = {};

    onSearchChange = (e) => {
        const country = e.target.value;
    }

    render() {
        const search = this.state.search;
        const countries = this.props.countries || [];

        return (
            <div className="form-group row mt-3">
                <div className="offset-md-2 col-md-4">
                    Lookf for your dream house in country:
                </div>
                <div className="col-md-4">
                    <select className="form-control" value={search} onChange={this.onSearchChange}>
                        {countries.map((c) => <option key={c} value={c}/>)}
                    </select>
                </div>
            </div>
        )
    }
}