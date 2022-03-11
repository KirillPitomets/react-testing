import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
// ======= Components ======
import App from './App'

describe('Test App', () => {
	test('should redirect to other pages', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		)
		const mainLink = screen.getByTestId('main-link')
		const aboutLink = screen.getByTestId('about-link')

		fireEvent.click(aboutLink)
		expect(screen.getByTestId('about-link')).toBeInTheDocument()

		fireEvent.click(mainLink)
		expect(screen.getByTestId('main-page')).toBeInTheDocument()
	})

	test('should view error page', () => {
		render(
			<MemoryRouter initialEntries={['/1ignapibaz']}>
				<App />
			</MemoryRouter>
		)

		expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
	})
})
