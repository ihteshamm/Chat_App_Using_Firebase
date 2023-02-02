import React from 'react';
import { getUsers } from '../services/firebase';

function useUsers(roomId) {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        const unsubscribe = getUsers(roomId, setUsers);

        return unsubscribe;
    }, [roomId]);

    return users;
}

export { useUsers };
