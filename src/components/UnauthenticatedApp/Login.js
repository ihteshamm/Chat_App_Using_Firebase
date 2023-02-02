import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useLogin } from '../../hooks/useLogin';

import './styles.css';

function Login() {
    const [name, setName] = React.useState('');
    const login = useLogin("Users");
    const { setUser } = useAuth();
    const [email, setEmail] = React.useState('');
    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const LoginHandle = (event) => {
        event.preventDefault();
        const user = {
            uid: Math.random(),
            displayName: name,
        }
        login.map((users) => (
            users.displayName === user.displayName ?
                users.email === email ?
                    setUser(user)
                    // window.alert("Login!")
                    : ""
                : ""
        ));


    }

    return (
        <>
            <div>
                <h1 className="text">Login!</h1>
                <form onSubmit={LoginHandle} className="message-input-container">
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={handleName}
                            className="message-input"
                            required
                            minLength={1}
                        />
                    </div>
                    <br />
                    <space/>
                    <div >
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmail}
                            className="message-input"
                            required
                            minLength={1}
                        />
                    </div>
                    <div>
                        <button
                            type="submit" className="send-message">
                            Login
                        </button>
                    </div>
                </form >
            </div>
        </>
    );
}

export default Login;