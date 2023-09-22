import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const isAdult = true;
    let text;
    if (isAdult) {
        text = "больше 18-ти"
    } else {
        text = "меньше 18-ти"
    }

    return (
        <div>
            <p>{text}</p>
        </div>
    );
}
export default App