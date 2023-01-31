import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useMessages } from '../../hooks/useMessages';
import './styles.css';

function MessageList({ roomId }) {
    const containerRef = React.useRef(null);
    const { user } = useAuth();
    const messages = useMessages(roomId);

    React.useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    });

    return (
        <div className="message-list-container" ref={containerRef}>
            <ul className="message-list">
                {messages.map((x) => (
                    <Message
                        key={x.id}
                        message={x}
                        isOwnMessage={x.uid === user.uid}
                    />
                ))}
            </ul>
        </div>
    );
}

function Message({ message, isOwnMessage }) {
    const { displayName, text } = message;

    return (
        <li className={['message', isOwnMessage && 'own-message'].join(' ')}>
            {
                !text.startsWith("https://firebasestorage.googleapis.com") ?
                    <div>{text}
                        <h6 className="sender">{isOwnMessage ? "" : displayName}</h6>
                    </div>
                    :
                    text.includes(".pdf") ?
                        <div>
                            <iframe
                                title="myFrame"
                                background = "#005d4b"
                                src={text}
                                alt="Can't Show"
                                height={250}
                                width={250}

                            />
                        </div>
                        :
                        <div>
                            <img
                                background={'red'}
                                src={text}
                                alt="Can't Show"
                                height={250}
                                width={250}
                            />
                        </div>


            }
        </li>
    );
}

export { MessageList };
