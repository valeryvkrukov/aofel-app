import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <span id="navbar-toggler" className="navbar-toggler-icon"></span>
                    <img className="h-8 w-auto app-logo" src="/static/img/logo.png" alt="AOFEL"/>
                </a>
            </div>
        </nav>
    );
};

export default NavBar;