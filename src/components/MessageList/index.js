import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useMessages } from '../../hooks/useMessages';
import './styles.css';

function MessageList() {
    const containerRef = React.useRef(null);
    const { chatWithUser } = useAuth();
    const { user } = useAuth();
    const messages = useMessages("Users");

    React.useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    });

    return (
        <div className="message-list-container" ref={containerRef}>
            <ul className="message-list">
                {messages.map((messages) => (
                    (messages.reciver !== "Group") ?
                        (messages.reciver === chatWithUser && messages.sender === user.displayName)
                            ||
                            (messages.reciver === user.displayName && messages.sender === chatWithUser)
                            ?
                            < Message
                                key={messages.id}
                                message={messages}
                                isOwnMessage={messages.sender === user.displayName}
                            /> : " "
                        :
                        (messages.reciver === "Group") ?
                            (messages.reciver === chatWithUser)
                                ?
                                < Message
                                    key={messages.id}
                                    message={messages}
                                    isOwnMessage={messages.sender === user.displayName}
                                />
                                : " "
                            : " "

                ))}
            </ul>
        </div>
    );
}

function Message({ message, isOwnMessage }) {
    const { sender, text } = message;

    return (
        <li className={['message', isOwnMessage && 'own-message'].join(' ')}>
            {
                !text.startsWith("https://firebasestorage.googleapis.com") ?
                    <div>{text}
                        <h6 className="sender">{isOwnMessage ? "" : sender}</h6>
                    </div>
                    :
                    text.includes(".pdf") ?
                        <div>
                            <iframe
                                title="myFrame"
                                background="#005d4b"
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
