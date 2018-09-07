import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'
import {connection } from 'react-redux'
import {step2, updateImg} from '../../ducks/reducer'
import { connect } from "react-redux";



class stepTwo extends Component {
    constructor(props) {
      super(props);
     
    }





  render() {
    
    return (
      <div>
        <input onChange = {(e) => {this.props.updateImg(e.target.value)}}  placeholder="image" />
        

        <Link to='/wizard/step3'><button > Next Step </button></Link>
        <Link to='/wizard/step1'><button> Previous Step </button></Link>
      </div>
    );
  }

}

function mapStateToProps(state) {
    return {
        img: state.img
    }
}


export default connect(mapStateToProps, {updateImg}) (stepTwo)