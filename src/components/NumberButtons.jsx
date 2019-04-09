import React, { Component } from 'react'
// import '../components/NumberButtons.css'
import '../App.css'
import * as math from 'mathjs'

export default class NumberButtons extends Component {
  state = {
    inputValue: '',
    total: 0
  }


  render() {
    console.log(this.state)
    return (
      <div classnName='calculator-wrapper'>
        <h1>Mini App Calculator</h1>
        <input className='inputField' value={this.state.inputValue}></input>
        <input className='inputField' value={this.state.total}></input>
        <div className='row'>
          <button id='circle' className='button' onClick={this.handleClick} value={7}>7</button>
          <button id='circle' className='button' onClick={this.handleClick} value={8}>8</button>
          <button id='circle' className='button' onClick={this.handleClick} value={9}>9</button>
          <button id='circle' className='operator-button' onClick={this.handleClick} value={'*'}>x</button>
        </div>

        <div className='row'>
          <button id='circle' className='button' onClick={this.handleClick} value={4}>4</button>
          <button id='circle' className='button' onClick={this.handleClick} value={5}>5</button>
          <button id='circle' className='button' onClick={this.handleClick} value={6}>6</button>
          <button id='circle' className='operator-button' onClick={this.handleClick} value={'-'}>-</button>
        </div>

        <div className='row'>
          <button id='circle' className='button' onClick={this.handleClick} value={1}>1</button>
          <button id='circle' className='button' onClick={this.handleClick} value={2}>2</button>
          <button id='circle' className='button' onClick={this.handleClick} value={3}>3</button>
          <button id='circle' className='operator-button' onClick={this.handleClick} value={'+'}>+</button>
        </div>

        <div className='row'>
          <button id='circle' className='button' onClick={this.handleClick} value={0}>0</button>
          <button id='circle' className='button' onClick={this.handleClick} value={'.'}>.</button>
          <button id='circle' className='operator-button' onClick={this.handleEqualClick} value={'='}>=</button>
          <button id='circle' className='operator-button' onClick={this.handleClick} value={'÷'}>÷</button>
        </div>

        <div className='row'>
          <button className='clear-button' onClick={() => { this.setState({ inputValue: '', total: 0 }) }}
          >Clear</button>
        </div>

      </div>
    )
  }

  handleClick = (event) => {
    const val = event.target.value
    this.setState({ inputValue: this.state.inputValue + val })
  }

  handleEqualClick = () => {
    this.setState({ total: math.eval(this.state.inputValue) })
  }
}

