import React from 'react';
// import { useAuth } from '../../hooks/useAuth';
import Login from './Login';
import Signup from './Signup';
import './styles.css';

function UnauthenticatedApp() {
    // const { login } = useAuth();


    return (
        <>
            <div>
                {/* <div>
                    <button onClick={login} className="login">
                        Login with Google
                    </button>
                </div> */}
                <br /><br /><br />
                <div>
                    <Signup />
                </div>
                <br /><br />
                <div>
                    <Login />
                </div>
            </div>
        </>
    );
}

export { UnauthenticatedApp };