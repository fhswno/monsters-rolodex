// import { Component } from 'react';
import './card.styles.css';

const Card = ({ monster: { id, name, email } }) => {
  return (
    <div className='card-container' key={ id }>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`Monster called ${name}`}
      />
      <h2>{ name }</h2>
      <p>{ email.toLocaleLowerCase() }</p>
    </div>
  );
};

export default Card;
