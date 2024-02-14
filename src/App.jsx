import './App.css'
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import AppRouter from "./components/AppRouter.jsx";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App
