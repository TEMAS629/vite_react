import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const age = 19;
	
	return <div>
		{age>18 ? <p>text1</p> : <p>text2</p>}
	</div>;
}


export default App