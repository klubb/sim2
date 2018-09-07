import React, { Component } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import axios from 'axios'
import stepOne from './stepOne'
import stepTwo from './stepTwo'
import stepThree from './stepThree'
import {connect} from 'react-redux'
import { cancel } from "../../ducks/reducer";


class Wizard extends Component {
  constructor(props) {
    super(props);
    
  }

  
  
  


  render() {
    

    return (
      <div>
        <Route path='/wizard/step1' component={stepOne} />
      <Route path='/wizard/step2' component={stepTwo} />
      <Route path='/wizard/step3' component={stepThree} />

      <Link to='/'><button onClick={this.props.cancel}>Cancel</button></Link>

      </div>
    )
  }
}



export default connect(null, {cancel})(Wizard)