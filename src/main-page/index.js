import React, {Component} from 'react';
import './main-page.css';
import AppPresentation from './app-presentation';


class App extends Component {
  // construtor take props as parameter
  constructor(props) {
    super(props);
    this.state = {}; // can initialize some state object or initial value here to use

  }

  /* Alternative property initializers
  state = {}
  */

  // lifecycle method that is executed by React after a component is mounted
  componentDidMount = () => { // mounting refers to adding components to React components tree aka DOM
    this.fetchHouses();
  }

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true});
    console.log(error, info); // log the error
  }


  determineFeaturedHouse = () => {
    if (this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse });
    }
  }

  determineUniqueCountries = () => {
    const countries = this.allHouses? Array.from(new Set(this.allHouses.map(h => h.country))): [];
    countries.unshift(null);
    this.setState({ countries });

  }

  filterHouses = (country) => {
    this.setState({ activeHouse: null });
    const filteredHouses = this.allHouses.filter((h) => h.country === country);
    this.setState({ filteredHouses });
    this.setState({ country });
  }
  
  setActiveHouse = (house) => {
    this.setState({ activeHouse: house});
  }

  fetchHouses = () => {
    fetch('../houses.json')
    .then(rsp => rsp.json())
    .then(allHouses => { 
      this.allHouses = allHouses; 
      this.determineFeaturedHouse();
      this.determineUniqueCountries();
    })
  }


  render() {
    // re-render if error occurs
    if (this.state.hasError) {
      return <h1>Whoops! Some errors has occured!</h1>;
    }
    
    // render normal UI if no error is found
    return (
      <AppPresentation 
        country={this.state.country} 
        filteredHouses={this.state.filteredHouses}
        featuredHouse={this.state.featuredHouse}
        countries={this.state.countries}
        filterHouses={this.filterHouses}
        activeHouse={this.state.activeHouse}
        setActiveHouse={this.setActiveHouse}
      />

    )
    
  }
}

export default App;
