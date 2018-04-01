import React, { Component } from "react";
import Shelf from './Shelf';
import './Shelves.css';

class Shelves extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="shelves">
        <div className="shelf_A"><Shelf id="A" history={ history } /></div><br/>
        <div className="shelf_B"><Shelf id="B" history={ history } /></div><br/>
        <div className="shelf_C" ><Shelf id="C" history={ history } /></div><br/>
        <div className="shelf_D" ><Shelf id="D" history={ history } /></div><br/>
      </div>
    )
  }
}

export default Shelves;