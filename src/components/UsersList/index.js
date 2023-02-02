import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useUsers } from '../../hooks/useUsers';
import './styles.css';
import { Link } from 'react-router-dom';
function UsersList() {
    const containerRef = React.useRef(null);
    const users = useUsers("Users");

    React.useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    });

    return (
        <div className="message-list-container" ref={containerRef}>
            <ul className="message-list">
                {users.map((x) => (
                    <>
                        <Message
                            key={x.id}
                            message={x}
                        />
                    </>
                ))}
            </ul>
        </div>
    );
}

function Message({ message }) {
    const { displayName, email } = message;
    const { setChatWithUser } = useAuth();

    return (
        <li
            onClick={() => setChatWithUser(displayName)}
            className={['message'].join(' ')}>
            <Link
                to={`/GroupChat`} type="button">
                <div
                >{`Name  : ${displayName}`}
                    <h6 className="sender">{email}</h6>
                </div>
            </Link>
        </li >
    );
}

export { UsersList };
