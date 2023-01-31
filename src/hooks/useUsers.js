import React from 'react';
import { getUsers } from '../services/firebase';

function useUsers(uid) {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        const unsubscribe = getUsers(uid, setUsers);

        return unsubscribe;
    }, [uid]);

    return users;
}

export { useUsers };
