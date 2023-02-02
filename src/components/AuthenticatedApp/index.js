import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from '../Landing';
import { ChatRoom } from '../ChatRoom';
import { UserRoom } from '../UserRoom';

function AuthenticatedApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/GroupChat" element={<ChatRoom />} />
                <Route path="/AllUsers" element={<UserRoom />} />
            </Routes>
        </BrowserRouter>
    );
}

export { AuthenticatedApp };
