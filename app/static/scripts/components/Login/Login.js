import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

async function loginUser(credentials) {
    return axios({
        method: 'POST',
        url: '/api/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(credentials)
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        }
        return error.response;
    });
};

const Login = ({setToken}) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = await loginUser({
            username,
            password
        });

        setToken(token);
    };

    return (
        <React.Fragment>
            <div className='container-fluid h-100'>
                <div className='row justify-content-center text-center'>
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit} className='col-4 py-4 form-floating'>
                        <div className='mb-3 form-floating'>
                            <input id='username' type="text" onChange={e => setUsername(e.target.value)} required className='form-control'/>
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className='mb-3 form-floating'>
                            <input id='password' type="password" onChange={e => setPassword(e.target.value)} required className='form-control'/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className='mb-3'>
                            <button type="submit" className='btn btn-primary py-3 my-6 rounded font-bold px-4'>Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default Login;