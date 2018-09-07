import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { step3, updateMortgage, updateRent } from "../../ducks/reducer";
import { connect } from "react-redux";
import { cancel } from "../../ducks/reducer";

class stepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mortgage: "",
      rent: ""
    };
  }

  createPost = () => {
    axios
      .post("/api/house", {
        name: this.props.name,
        address: this.props.address,
        city: this.props.city,
        state: this.props.state,
        zip: this.props.zip,
        img: this.props.img,
        mortgage: this.state.mortgage,
        rent: this.state.rent
      })
      .then(() => {
        // {this.props.cancel}
      });
  };

  render() {
    // const { name, address, city, state, zip, img, mortgage, rent } = this.props;
    console.log(this.props);
    // console.log(this.state)
    return (
      <div>
        <input
            type='number'
          onChange={e => this.props.updateMortgage(e.target.value)}
          placeholder="monthly mortgage amount"
        />
        <input
            type='number'
          onChange={e => this.props.updateRent(e.target.value)}
          placeholder="desired monthly rent"
        />

        <Link to="/wizard/step2">
          <button> Previous Step </button>
        </Link>
        <Link to="/">
          <button onClick={this.createPost}>Complete</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mortgage: state.mortgage,
    rent: state.rent
  };
}

export default connect(
  mapStateToProps,
  { updateMortgage, updateRent }
)(stepThree);
