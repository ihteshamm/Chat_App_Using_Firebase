
import { initializeApp } from 'firebase/app';
import "firebase/database";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
} from 'firebase/firestore';

const firebaseConfig = {
    databaseURL: "https://chatting-5c8fc-default-rtdb.firebaseio.com",  
    apiKey: "AIzaSyCg4508Ny3pPDRHKSa_E9yrWsbb8opWQ2Y",
    authDomain: "chatting-5c8fc.firebaseapp.com",
    projectId: "chatting-5c8fc",
    storageBucket: "chatting-5c8fc.appspot.com",
    messagingSenderId: "978812833574",
    appId: "1:978812833574:web:dac38b1c7617fe968a3be7",
    measurementId: "G-XMHLT70V57"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        const { user } = await signInWithPopup(auth, provider);
        return { uid: user.uid, displayName: user.displayName };
    } catch (error) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }
        return null;
    }
}

async function sendFile(roomId, user, text) {
    try {
        await addDoc(collection(db, 'chat-rooms', roomId, 'messages'), {
            uid: user.uid,
            displayName: user.displayName,
            text: text.trim(),
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.error(error);
    }
}


async function sendMessage(roomId, user, text) {
    try {
        await addDoc(collection(db, 'chat-rooms', roomId, 'messages'), {
            uid: user.uid,
            displayName: user.displayName,
            text: text.trim(),
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.error(error);
    }
}


function getMessages(roomId, callback) {
    return onSnapshot(
        query(collection
            (db, 'chat-rooms', roomId, 'messages'),
            orderBy('timestamp', 'asc')
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((x) => ({
                id: x.id,
                ...x.data(),
            }));

            callback(messages);
        }
    );
}

export { loginWithGoogle, sendMessage, getMessages, storage , sendFile};
