import { MessageInput } from '../MessageInput';
import { MessageList } from '../MessageList';
import './styles.css';


function ChatRoom() {

    return (
        <>
            <div className="messages-container">
                <MessageList />
                <MessageInput />
            </div>
        </>
    );
}

export { ChatRoom };
