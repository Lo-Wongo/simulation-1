import React, { Component } from "react";
import Bin from './Bin';
import axios from "axios";
import './Bins.css';
// import Header from '../../components/Header/Header';

export default class Bins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bins: [ ]
    }
  }

  componentDidMount() {
    
    const { id } = this.props.match.params;
    axios.get( `/api/shelf/${id}` ).then( response => {
      this.setState({ bins: response.data });
    });
  }

  render() {
    console.log(this.props.match.params.id)
    const { id } = this.props.match.params;
    const { bins } = this.state;
    const Bins = bins.map( (bin, i) => (
      bin
      ?
        <Bin key={ i } number={ i + 1 } binLink={ `/bin/${id}${ i + 1 }` } filled={ true } />
      :
        <Bin key={ i } number={ i + 1 } createLink={ `/create/${id}${ i + 1 }` } filled={ false } />
    ));

    return (
      <div>
      <div className="bins">

        { Bins }


      </div>
      </div>
    )
  }
}