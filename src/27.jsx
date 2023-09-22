import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const isAdmin = false;
    let text = 'True'
    if (isAdmin) {
        text =
        <div>
            <p>text</p>
            <p>text</p>
            <p>text</p>
        </div>
    }
    else {
        text = " "
    }
    return (
        <div>
            <p>{text}</p>
        </div>
    )
}




export default App