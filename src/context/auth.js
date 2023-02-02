import React from 'react';
import { loginWithGoogle } from '../services/firebase';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
    const [loginInputData, setloginInputData] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const [chatWithUser, setChatWithUser] = React.useState(null);

    const login = async () => {
        const user = await loginWithGoogle();
        if (!user) {
            window.alert("No User");
        }
        if (user) {
            window.alert("User");
            setUser(user);
        }
    };

    const value = {setUser, setChatWithUser,chatWithUser, user, login, loginInputData, setloginInputData };

    return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };