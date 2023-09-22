import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const isAuth = false;
	
	return <div>
		{!isAuth && <p>вы авторизованы</p>}
	</div>;
}

export default App