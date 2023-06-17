import React, { useState } from 'react';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

/*import MainLayout from './layouts/MainLayout';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainLayout>
                <React.Fragment>
                    TEST OK
                </React.Fragment>
            </MainLayout>
        );
    }
}

/*const App = () => {
    const [profileData, setProfileData] = useState(null);

    const mainContainer = (
        <React.Fragment>
            <span>MAIN CONTAINER</span>
            <p>To get your profile details: </p>
            <form target='/api/register' method='post'>
                <p>username:</p>
                <input type='text' name='username' value="valery"/>
                <p>username:</p>
                <input type='password' name='password' value="B!e281ckr"/>
                <button type='submit'>Add user</button>
            </form>
            <button onClick={signIn}>Click me</button>
        </React.Fragment>
    );

    function signIn() {
        axios({
            method: 'POST',
            url: '/api/login',
            data: {'username': 'valery', 'password': 'B!e281ckr'}
        }).then((response) => {
            const res = response.data;

            console.log(res);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        });
    }

    return (
        <MainLayout>
            {mainContainer}
        </MainLayout>
    );

    /*constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
        }
        this.mainContainer = (
            <React.Fragment>
                <span>MAIN CONTAINER</span>
            </React.Fragment>
        );
    }

    componentDidMount() {
        console.log('componentDidMount:')
    }
    
    render() {
        const { error, isLoaded } = this.state

        return (
            <MainLayout>
                {this.mainContainer}
            </MainLayout>
        );
    }
};

export default App;*/