import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  render() {
    const { personObj: { name, email, image, age } } = this.props;
    return (
      <div>
        <img src={ image } alt={ name } />
        <h2>Nome: { name }</h2>
        <p>Email: { email }</p>
        <p>Idade: { age }</p>
      </div>
    );
  }
}

User.propTypes = {
  personObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
}

export default User;