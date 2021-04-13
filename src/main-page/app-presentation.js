import React, { Component } from 'react';
import Header from './header';
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';
import HouseDetail from '../house/index';

const AppPresentation = (props) => {
    let activeComponent = null;
    if (props.country) {
      activeComponent = <SearchResults country={props.country} filteredHouses={props.filteredHouses} setActiveHouse={this.setActiveHouse} />;

    }

    if (props.activeHouse) {
      activeComponent = <HouseDetail house={props.activeHouse} />;
    }

    if (!activeComponent){
      activeComponent = <FeaturedHouse house={props.featuredHouse} />;
    }

    return (
      <div className="container">
        <Header subtitle="Home Sweet Home"/>
        <HouseFilter countries={props.countries} filterHouses={props.filterHouses}/>
        {activeComponent}
      </div>
    );
}


export default AppPresentation;