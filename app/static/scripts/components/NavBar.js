import React from 'react';

const NavBar = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <span id="navbar-toggler" class="navbar-toggler-icon"></span>
                    <img class="h-8 w-auto app-logo" src="/static/img/logo.png" alt="AOFEL"/>
                </a>
            </div>
        </nav>
    );
};

export default App;