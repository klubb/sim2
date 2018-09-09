import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'

import {step2} from '../../ducks/reducer'
import { connect } from "react-redux";



class stepTwo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        img: ''
      }
     
    }


handleImg = (e) => {
  this.setState({
    img: e.target.value
  })
}


  render() {
    const {step2} = this.props
    return (
      <div>
        <input onChange = {this.handleImg}  placeholder="image" />
        

        <Link to='/wizard/step3'><button onClick={() => step2(this.state.img)}> Next Step </button></Link>
        <Link to='/wizard/step1'><button onClick={() => step2(this.state.img)}> Previous Step </button></Link>
      </div>
    );
  }

}

function mapStateToProps(state) {
    return {
        img: state.img
    }
}


export default connect(mapStateToProps, {step2}) (stepTwo)