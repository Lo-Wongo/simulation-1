
import React, { Component } from 'react';
import logo from '../../logo.png';
import './Header.css';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        // console.log(this.props.match.params.id)
        console.log(this.props);
        return (

            <div className="Nav">
                <header className="Nav-header">
                <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                <h1 className="Nav-title">SHELFIE</h1>
                </header>
            </div>

        )
    }
}

export default Header;


