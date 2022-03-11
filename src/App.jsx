import React from 'react'
// ======= React router dom ======
import { Routes, Route, Link } from 'react-router-dom'
// ======= Components ======
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'

const App = () => {
	return (
		<div>
			<Link style={{ margin: '0 10px' }} to='/' data-testid='main-link'>
				Main
			</Link>
			<Link style={{ margin: '0 10px' }} to='/about' data-testid='about-link'>
				About
			</Link>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/*' element={<ErrorPage />} />
			</Routes>
		</div>
	)
}

export default App
