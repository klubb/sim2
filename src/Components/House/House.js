import React from "react";

export default function House(props) {
  return <div className='house'>
      <div className='house-info'>
      <h1>Name - {props.name}</h1>
      <h1>Address - {props.address}</h1>
      <h1>City - {props.city}</h1>
      <h1> State - {props.state}</h1>
      <h1>Zipcode - {props.zip}</h1>
      </div>

      <img src={props.image} alt=""/>
      {/* <p>image - {props.image}</p> */}
      <h2>Mortgage - ${props.mortgage}</h2>
      <h2>Rent - ${props.rent}</h2>
      <button onClick={() => props.delete(props.name)}>Delete</button>
  </div>;
}
