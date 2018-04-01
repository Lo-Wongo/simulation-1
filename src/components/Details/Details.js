import React, { Component } from "react";
import axios from "axios";
import './Details.css';

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      item: null,
      editMode: false,
      name: '',
      price: 0
    };

    this.handleChange = this.handleChange.bind( this );
    this.save = this.save.bind( this );
    this.delete = this.delete.bind( this );
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { history } = this.props;
    
    axios.get( `/api/bin/${id}` ).then( response => {
      const { data } = response;
      if ( !data ) {
        history.push(`/create/${id}`);
      } else {
        this.setState({ item: data, name: data.name, price: data.price });
      }
    });
  }

  handleChange(prop, val) {
    this.setState({ [prop]: val });
  }

  save() {
    const { price, name } = this.state;
    const { id } = this.props.match.params;
    if ( isNaN( price ) ) {
      return
    } else {
      axios.put( `/api/bin/${id}`, { name, price: parseInt( price, 10 ) } ).then( response => {
        const { data } = response;
        this.setState({ item: data, name: data.name, price: data.price, editMode: false });
      });
    }
  }

  delete() {
    const { id } = this.props.match.params;
    const { history } = this.props;
    axios.delete( `/api/bin/${id}` ).then( response => {
      history.push( `/bins/${id[0]}` );
    });
  }

  
  render() {
    const { item, editMode, name, price } = this.state;
    return (
      <div className="edit-details">
        { 
          item
          ?
            <div className="details">
              {/* <img src={ item.image } alt="inventory" /> */}
              {
                editMode
                ?
                  <div className="input_box">
                    <input onChange={ (e) => this.handleChange('name', e.target.value) } value={name} /> <br />
                    <input onChange={ (e) => this.handleChange('price', e.target.value) } value={price} /> <br />
                    <button className="save_btn" onClick={ this.save }> Save </button>
                  </div>
                :
                  <div className="details_input">
                    <p> Name: { item.name } </p>
                    <p> Price: ${ item.price.toFixed(2) } </p>
                    <button className="edit_btn" onClick={ () => this.handleChange('editMode', true) }> Edit </button>
                  </div>
              }
              <button className="delete_btn" onClick={ this.delete }> Delete </button>
            </div>
          :
            null
        }
      </div>
    )
  }
}