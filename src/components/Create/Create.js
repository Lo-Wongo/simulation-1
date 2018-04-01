import React, { Component } from "react";
import axios from "axios";
import './Create.css';


export default class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: 'http://lorempixel.com/200/200/business/',
      price: 0
    };

    this.handleChange = this.handleChange.bind( this );
    this.create = this.create.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }

  create() {
    const { id } = this.props.match.params;
    const { history } = this.props;
    const { name, price, image } = this.state;

    if ( isNaN( price ) ) {
      return
    } else {
      axios.post( `/api/bin/${id}`, { name, price, image } ).then( response => {
        history.push( `/bins/${id[0]}` );
      });
    }
  }

  render() {
    const { name, price } = this.state;
    return (
      <div className="create-inv">
        <span > Name <br/><input className="input-fields" value={ name } onChange={ (e) => this.handleChange('name', e.target.value) } /></span>
        <br />
        <span > Price <br/><input className="input-fields" placeholder="$0.00" value={ price } onChange={ (e) => this.handleChange('price', e.target.value) } /></span>
        <br />
        <button className="add-btn" onClick={ this.create }> + Add to Inventory </button>
      </div>
    )
  }
}