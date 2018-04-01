import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Bins.css';

export default class Bin extends Component {
  render() {
    console.log( this.props );
    const { number, createLink, binLink, filled } = this.props;
    return (
      <div className="bins-list">
        {
          filled
          ?
            <Link to={ binLink }>
              <span> Bin { number } </span>
            </Link>
          :
            <Link to={ createLink }>
              <span> + Add inventory to bin </span>
            </Link>
        }
      </div>
    )
  }
}