import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {

  state = {
    open: false
  }

  buttonBlue = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleClicked = () => {
    if(this.state.open){
      return (
        <div style={{
          width: '500',
          height: '500',
          backgroundColor:'green'
        }}>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>tela app</h1>
        <Button
          background={'#a83232'}
          border={'0'}
          text={'Botão Vermelho'}
        />
        <Button
          background={'#2f94a8'}
          border={'0'}
          text={'Botão Azul'}
          handleClick={this.buttonBlue}
        />
        {console.log(this.handleClicked())}
        {/* {this.state.open && <div style={{
          width: '500',
          height: '500',
          backgroundColor:'green'
        }}>
        </div>} */}
      </div>
    );
  }
}

export default App;
