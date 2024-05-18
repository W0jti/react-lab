import logo from './logo.svg';
import './App.css';
import "milligram";
import {useState} from "react";
import LoginForm from "./LoginForm";

function App() {
    const [email, setEmail] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function logout(){
        setIsAuthenticated(false);
        setEmail("");
    }

    let content;
    let login;

    if (isAuthenticated) {
        content = <div>
            <h2>Witaj {email}!</h2>
            <button onClick={logout}>Sign out</button>

        </div>
    } else {
        content = <div>
            <input value={email}
                   type="text"
                   onChange={handleChange}
            />
            <button onClick={() => setIsAuthenticated(true)}>Sign in</button>
            <LoginForm onLogin={login}/>
        </div>
    }

    return (
        <div>
            <h1>Witaj w systemie do zapisu na zajęcia</h1>
            <div>Zaloguj się e-mailem</div>
            {content}
        </div>
    );
}

export default App;
