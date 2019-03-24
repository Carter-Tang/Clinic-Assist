import React, { Component } from 'react'

export default class toggle {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render(){
    return(
      <div>
        {this.state.on && (
          <h1>toggle me</h1>
        )}
        <button onClick={this.toggle}>show/hide</button>
      </div>
    )
  }
}
