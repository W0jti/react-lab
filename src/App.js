import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState("wiechecwojciech@gmail.com");

    function handleChange(event) {
        setEmail(event.target.value);
    }

    let message = <div>Ale masz krótki adres!</div>
    if(email.length > 25) {
        message = <div>Twój email jest za długi!!</div>
    } else if (email.length > 10) {
        message = <div>Twój email jest w sam raz</div>
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}</h2>
            {message}
            <input type="text" value={email} onChange={handleChange}/>
        </div>
    );
}

export default App;
