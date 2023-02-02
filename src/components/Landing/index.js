import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './styles.css';
function Landing() {
    const { setChatWithUser } = useAuth();
    return (
        <>
            <ul className="chat-room-list">
                <li onClick={() => setChatWithUser("Group")}
                    key={2}>
                    <Link to={`GroupChat`}>Group Chat</Link>s
                </li>
                <br /><br />
                <li key={1}>
                    <Link to={`AllUsers`}>All Users</Link>
                </li>
            </ul>
        </>
    );
}

export { Landing };
