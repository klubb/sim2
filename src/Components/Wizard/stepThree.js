import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { step3} from "../../ducks/reducer";
import { connect } from "react-redux";
import { cancel } from "../../ducks/reducer";

class stepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mortgage: 0,
      rent: 0
    };
  }

  componentDidMount() {
    const { mortgage, rent } = this.props;
    this.setState({
      mortgage,
      rent
    });
  }

  handleMortgage = e => {
    this.setState({
      mortgage: e.target.value
    });
  };

  handleRent = e => {
    this.setState({
      rent: e.target.value
    });
  };

  createPost = () => {
    const { name, address, city, state, zip, img } = this.props;
    axios
      .post("/api/house", {
        name,
        address,
        city,
        state,
        zip,
        img,
        mortgage: this.state.mortgage,
        rent: this.state.rent
      })
      .then(() => {
        return this.props.history.push("/");
      });
  };

  render() {
    const { step3, cancel } = this.props;

    return (
      <div>
        <input
          type="number"
          onChange={this.handleMortgage}
          placeholder="monthly mortgage amount"
        />
        <input
          type="number"
          onChange={this.handleRent}
          placeholder="desired monthly rent"
        />

        <Link to="/wizard/step2">
          <button onClick={() => step3(this.state.mortgage, this.state.rent)}> Previous Step </button>
        </Link>
        <Link to="/">
          <button onClick={() => {
            this.createPost()
            cancel()
          }}>Complete</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {name, address, city, zip, img, mortgage, rent} = state
  return {
    name,
    address,
    city,
    state: state.state,
    zip,
    img,
    mortgage, 
    rent
  };
}

export default connect(
  mapStateToProps,
  { step3, cancel}
)(stepThree);
