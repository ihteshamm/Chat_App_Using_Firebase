import React from 'react';
import { Signup } from '../../services/firebase';
import './styles.css';
// import { useLogin } from '../../hooks/useLogin';

function SignUp() {
    const [name, setName] = React.useState('');
    // const login = useLogin("Users");
    // const [check, setCheck] = React.useState('');
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
            name: name,
            email: email,
        }
        // login.map((users) => (
        //     users.displayName === user.name ?
        //         users.email === email ?
        //             setCheck("found")
        //             : ""
        //         : ""
        // ));
        signupUser(user)
    }

    const signupUser = (user) => {
        // if (check === "found") {
        //     window.alert("Username or Email Already Exists!");
        // } else {
            Signup(user);
            window.alert("SignIn Successfully!");
        // }
    }


    return (
        <>
            <div>
                <h1  className="text"> Sign Up </h1>
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
                            Signup
                        </button>
                    </div>
                </form >
            </div>
        </>
    );
}

export default SignUp;