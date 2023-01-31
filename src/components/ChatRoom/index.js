import {  useParams } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import { MessageInput } from '../MessageInput';
import { MessageList } from '../MessageList';
import './styles.css';

function ChatRoom() {
    const params = useParams();
    const room = chatRooms.find((x) => x.id === params.id);
    if (!room) {
        // TODO: 404
    }

    return (
        <>
            <div className="messages-container">
                <MessageList roomId={room.id} />
                <MessageInput roomId={room.id} />
            </div>
            {/* <Link to="/">Back</Link> */}
        </>
    );
}

export { ChatRoom };
