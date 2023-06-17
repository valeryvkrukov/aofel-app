import React from 'react';
import NavBar from './NavBar';
import Login from './Login/Login';
import useToken from './App/useToken';
import TestsTable from './App/TestsTable';

const Main = () => {
    const { token, setToken } = useToken();

    const getNavBar = () => {
        return <NavBar isAuthenticated={ (!sessionStorage.token) ? false : true }/>;
    };
    const getMainContents = () => {
        if (!sessionStorage.token) {
            return <Login setToken={ setToken }/>;
        } else {
            return <TestsTable/>
        }
    };

    return (
        <React.Fragment>
            <div className='container-fluid m-0 p-0 h-100'>
                { getNavBar() }
                <div className='row m-0 p-0 h-100'>
                    <div className='col-10 mt-2 test-table'>
                        { getMainContents() }
                    </div>
                    <div className='col-2 p-2'>
                        <div className='text-center align-middle h-100 ad-space'>
                            <span className="position-relative top-50">AD SPACE</span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Main;