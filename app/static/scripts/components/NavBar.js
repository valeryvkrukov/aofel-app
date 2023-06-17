import React from 'react';

const NavBar = ({ isAuthenticated }) => {
    const getMenu = () => {
        if (isAuthenticated) {
            return (<span id="navbar-toggler" className="navbar-toggler-icon"></span>);
        } else {
            return '';
        }
    };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    { getMenu() }
                    <img className="h-8 w-auto app-logo" src="/static/img/logo.png" alt="AOFEL"/>
                </a>
            </div>
        </nav>
    );
};

export default NavBar;