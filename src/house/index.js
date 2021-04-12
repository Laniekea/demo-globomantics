import React, { Component } from 'react';
import './house.css';

class House extends Component {
    state = {}
    render() {
        const house = this.props.house;
        return (
            <div>
                <div className="row mt-2">
                    <h5 className="col-md-12">{house.country}</h5>
                </div>
                <div className="row">
                    <h3 className="col-md-12">{house.address}</h3>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <img src="./house.jpg" className="house-image" alt="house"></img>
                    </div>
                </div>
                <div className="col-md-5">
                    <p className="price">${house.price}</p>
                    <p>{house.description}</p>
                </div>
            </div>
        )
    }
}

export default House;