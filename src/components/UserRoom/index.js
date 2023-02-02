import { UsersList } from '../UsersList';
import './styles.css';

function UserRoom() {
    return (
        <>
            <div className="messages-container">
                <UsersList />
            </div>
        </>
    );
}

export { UserRoom };
