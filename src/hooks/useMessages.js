import {collection, orderBy, query} from 'firebase/firestore';
import {FIREBASE_STORE} from "../firebase/config.js";
import {useCollectionData} from "react-firebase-hooks/firestore";

export const useMessages = () => {
    const messagesRef = collection(FIREBASE_STORE, 'messages');
    const q = query(messagesRef, orderBy('createdAt'));
    const [messages, loading] = useCollectionData(q);
    return [messages, loading];
};
