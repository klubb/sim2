import React from "react";

export default function House(props) {
  return <div>
      <p>name - {props.name}</p>
      <p>address - {props.address}</p>
      <p>city - {props.city}</p>
      <p> state - {props.state}</p>
      <p>zipcode - {props.zip}</p>
      <img src={props.image} alt=""/>
      {/* <p>image - {props.image}</p> */}
      <p>mortgage - {props.mortgage}</p>
      <p>rent - {props.rent}</p>
      <button onClick={() => props.delete(props.name)}>Delete</button>
  </div>;
}
