import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <nav className="navbar-sidebar">
                <ul className="list-unstyled navbar__list">
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/offer-list">Offers List</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Sidebar;
