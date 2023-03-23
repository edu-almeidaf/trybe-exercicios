import React, { Component } from 'react';
import Loading from './components/Loading';
import User from './components/User';

class App extends Component {
  state = {
    loading: true,
    storedPeople: [],
    personObj: undefined,
  }

  componentDidMount() {
    this.fetchPerson();
  }

  fetchPerson = async () => {
    this.setState({
      loading: true,
    }, async () => {
      const requestApi = await fetch('https://api.randomuser.me/ ');
      const requestObj = await requestApi.json();
      this.setState({
        loading: false,
        personObj: requestObj.results,
      });
      ;
    })
  }

  getUserElements = ({ name, email, dob, picture }) => {
    return {
      name: `${name.first} ${name.last}`,
      email,
      age: dob.age,
      image: picture.thumbnail,
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    console.log(nextState);
    const AGE = 50;
    return nextState.personObj && nextState.personObj[0].dob.age < AGE;
  }

  render() {
    const { loading, personObj } = this.state;
    return (
      <div>
        {
          loading
          ? <Loading />
          : <User personObj={ this.getUserElements(personObj[0]) } />
        }
      </div>
    );
  }
}

export default App;
