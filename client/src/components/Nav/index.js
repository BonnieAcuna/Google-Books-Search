import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="row">
                <h1 className="navbar-brand ml-3">Google Books</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/">Search</Link>
                        <Link to="/saved">Saved</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;