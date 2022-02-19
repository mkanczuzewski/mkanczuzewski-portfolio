import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

//   const randomWidth = () => {
//     const number = Math.random() * (300 - 200) + 200;
//     return number.toString().split('.')[0];
//   };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={props.image}
          alt="Project Image"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {props.name}</h5>
          <p className="card-text">Description: {props.description}</p>
          <a href={props.url} className="card-link">URL To Project </a>
        </div>
      </div>
    </div>
  );
}
