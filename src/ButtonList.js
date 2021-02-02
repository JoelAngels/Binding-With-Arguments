import React, { Component } from 'react';
import './ButtonList.css';

class ButtonList extends Component {
    static defaultProps = {
        colors: ['#FF0000','#c5dcad','#badc58','#f0932b']
    }
    constructor(props) {
        super(props);
        this.state = {color: "cyan"}
    }
    changeColor(newColor) {
        this.setState({color: newColor})
    }
    render() {
        return (
            <div className = "ButtonList" style = {{backgroundColor: this.state.color}}>
              {this.props.colors.map(c => {
                  const colorObj = {backgroundColor: c};
                  return <button style = {colorObj} onClick = {this.changeColor.bind(this, c)}>
                      Click On Me
                  </button>
              })}
            </div>
        )
    }
}

export default ButtonList;