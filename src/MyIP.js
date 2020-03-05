import React, { Component } from 'react';
import axios from 'axios';

export default class MyIP extends Component {
  state = {
    isLoading: true,
    data: null
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    axios.get('http://httpbin.org/ip').then(data => {console.log(data)})
  }

  render() {
    return (
      <p>Meu ip é: </p>
    )
  }
}





