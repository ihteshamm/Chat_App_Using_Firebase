import React from 'react';
import { loginWithEmail } from '../services/firebase';

function useLogin(roomId) {
    const [dbUsers, setDbUsers] = React.useState([]);

    React.useEffect(() => {
        const unsubscribe = loginWithEmail(roomId, setDbUsers);

        return unsubscribe;
    }, [roomId]);

    return dbUsers;
}

export { useLogin };
