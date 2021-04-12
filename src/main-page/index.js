import React, {Component} from 'react';
import logo from './logo.jpg';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';

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

  fetchHouses = () => {
    fetch('../houses.json').then(rsp => rsp.json()).then(allHouses => { 
      this.allHouses = allHouses; 
      this.determineFeaturedHouse();
    })
  }

  render() {
    // re-render if error occurs
    if (this.state.hasError) {
      return <h1>Whoops! Some errors has occured!</h1>;
    }
    
    // render normal UI if no error is found
    return (
      <div className="container">
        <Header subtitle="Home Sweet Home"/>
        <FeaturedHouse house={this.state.featuredHouse}/>
      </div>
    );
  }
}

export default App;
