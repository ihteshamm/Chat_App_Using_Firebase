import { Link } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import './styles.css';

function Landing() {
    return (
        <>
            <ul className="chat-room-list">
                {chatRooms.map((room) => (
                    <li key={room.id}>
                        <Link to={`/user/${room.id}`}>{room.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export { Landing };
