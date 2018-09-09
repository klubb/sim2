import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'
import {step1} from '../../ducks/reducer'
import {connect} from 'react-redux'


class stepOne extends Component {
    constructor(props){
      super(props);
      this.state = {
        name: "",
        address: "",
        city: "",
        state: "",
        zip: 0
      };
    }

    componentDidMount() {
        const {name, address, city, state, zip} = this.props
        this.setState({
          name, address, city, state, zip
        })
    }


handleName = (e) => {
    this.setState({
        name: e.target.value
})

}

handleAddress = (e) => {
    this.setState({
        address: e.target.value
})}

handleCity = (e) => {
    this.setState({
        city: e.target.value
})}

handleState = (e) => {
    this.setState({
        state: e.target.value
})}

handleZip = (e) => {
    this.setState({
        zip: e.target.value
})}



  render() {
    const {step1} = this.props
    return (
      <div>
        <input onChange = {this.handleName}  placeholder="name" />
        <input onChange = {this.handleAddress}  placeholder="address" />
        <input onChange = {this.handleCity}  placeholder="city" />
        <input onChange = {this.handleState}  placeholder="state" />
        <input onChange = {this.handleZip}  placeholder="zipcode" type = 'number'/>

        <Link to='/wizard/step2'><button onClick={() => step1(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zip)}>Next Step</button></Link>
        

      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip

    }
}

export default connect(mapStateToProps, {step1}) (stepOne)