import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    let content;
    if (isAuthenticated) {
        content = <div>
            <h2>Witaj {email}!</h2>
            <button onClick={() => setIsAuthenticated(false)}>Sign out</button>

        </div>
    } else {
        content = <div>
            <input value={email}
                   type="text"
                   onChange={handleChange}
            />
            <button onClick={() => setIsAuthenticated(true)}>Sign in</button>
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
