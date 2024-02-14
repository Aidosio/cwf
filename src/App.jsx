import './App.css'
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import AppRouter from "./components/AppRouter.jsx";
import {useAuthState} from "react-firebase-hooks/auth";
import {FIREBASE_AUTH} from "./firebase/config.js";
import Loader from "./components/Loader.jsx";

function App() {
    const [user, loading, error] = useAuthState(FIREBASE_AUTH)

    if (loading) {
        return <Loader />
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App
