import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'
import {step1, updateAddress, updateName, updateCity, updateZip, updateState } from '../../ducks/reducer'
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
        
    }


// handleName = (e) => {
//     this.setState({
//         name: e.target.value
// })

// }

// handleAddress = (e) => {
//     this.setState({
//         address: e.target.value
// })}

// handleCity = (e) => {
//     this.setState({
//         city: e.target.value
// })}

// handleState = (e) => {
//     this.setState({
//         state: e.target.value
// })}

// handleZip = (e) => {
//     this.setState({
//         zip: e.target.value
// })}



  render() {
    //   const {name, address, city, state, zipcode} = this.state
      console.log(this.props)
    return (
      <div>
        <input onChange = {(e) => this.props.updateName(e.target.value)}  placeholder="name" />
        <input onChange = {(e) => this.props.updateAddress(e.target.value)}  placeholder="address" />
        <input onChange = {(e) => this.props.updateCity(e.target.value)}  placeholder="city" />
        <input onChange = {(e) => this.props.updateState(e.target.value)}  placeholder="state" />
        <input onChange = {(e) => this.props.updateZip(e.target.value)}  placeholder="zipcode" type = 'number'/>

        <Link to='/wizard/step2'><button >Next Step</button></Link>
        

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

export default connect(mapStateToProps, {updateAddress, updateName, updateCity, updateZip, updateState}) (stepOne)