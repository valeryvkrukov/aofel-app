import React from 'react';

import NavBar from '../components/NavBar';

const MainLayout = ({ children }) => {
    let navbar = (
        <React.Fragment>
            <NavBar />
        </React.Fragment>
    );
    let mainContainer = (
        <React.Fragment>
            <div className='container-fluid mt-1'>
                <div className='row'>
                    <div className='col-10 test-table'>
                        {children}
                    </div>
                    <div className='col-2 text-center align-middle ad-space'>
                        <span className="position-relative top-50">AD SPACE</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            {mainContainer}
        </React.Fragment>
    );
};

export default MainLayout;