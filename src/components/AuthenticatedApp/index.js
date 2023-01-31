import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from '../Landing';
import { ChatRoom } from '../ChatRoom';

function AuthenticatedApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/user/:id" element={<ChatRoom />} />
            </Routes>
        </BrowserRouter>
    );
}

export { AuthenticatedApp };
