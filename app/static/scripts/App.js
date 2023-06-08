import React from 'react';
import MainLayout from './layouts/MainLayout';

const App = () => {
    let mainContainer = (
        <React.Fragment>
            <span>MAIN CONTAINER</span>
        </React.Fragment>
    );
    
    return (
        <MainLayout>
            {mainContainer}
        </MainLayout>
    );
};

export default App;