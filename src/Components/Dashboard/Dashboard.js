import React, { Component } from "react";
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      houseList: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/houses').then((response) => {
      this.setState({
        houseList: response.data
      })
    })
  }

  deleteHouse = (id) => {
    axios.delete(`/api/house/${id}`).then(() => {
      this.componentDidMount()
    })
  }
  
  render() {

    let displayHouse = this.state.houseList.map((house, i) => {
      return ( 
        <div key={i}>
        <House 
        id={house.id}
        name={house.name}
        address={house.address}
        city={house.city}
        state={house.state}
        zip={house.zip}
        image={house.img}
        mortgage={house.mortgage}
        rent={house.rent}
        delete={this.deleteHouse}
        />
        </div>
      )
    })
    return (
      <div className='container'>
      <div className='content'>
      
        
        <Link to='/wizard/step1'><button>Add New Property</button></Link>
        
        
        
        {displayHouse}

        
        </div>
      </div>
    );
  }
}

export default Dashboard;
