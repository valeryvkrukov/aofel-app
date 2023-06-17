import React, { useState } from 'react';

const useToken = () => {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = null;

        try {
            userToken = JSON.parse(tokenString);

            return userToken?.token;
        } catch (e) {
            return false;
        }
    };
    const [token, setToken] = useState(getToken());
    const saveToken = (userToken) => {
        if (userToken && userToken.token != undefined) {
            sessionStorage.setItem('token', JSON.stringify(userToken));
            setToken(userToken.token);
        }
    };

    return {
        setToken: saveToken,
        token
    };
};

export default useToken;