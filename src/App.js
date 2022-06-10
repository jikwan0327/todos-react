import "./App.css";
import Design from "./components/Design";
import Login from "./components/Login";
import Regist from "./components/Regist";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Design />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Regist />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
