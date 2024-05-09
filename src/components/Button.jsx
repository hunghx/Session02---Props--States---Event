import React, { Component } from 'react'

export default class Button extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <button  type='button' onClick={this.props.onClick} className={this.props.cssClass+ " btn"}>
        {this.props.children}
      </button>
    )
  }
}
