import React, { Component } from 'react';
import axios from 'axios';

const withHttp = WrappedComponent => {
  return class extends Component {

    state = {
      isLoading: false,
      data: {}
    }
  
    componentDidMount() {
      this.setState({
        isLoading: true
      })
      axios.get('http://httpbin.org/ip')
      .then(data => {
        this.setState({
          isLoading: false,
          data: data.data
        })
      })
    }

    render() {
      return (
        <div>
          HOC: <WrappedComponent/>
        </div>
      )
   }
  }
}
export default withHttp