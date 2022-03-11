import { render, screen, fireEvent } from '@testing-library/react'
// ======= Components ======
import Users from './Users'
// ======= Axios ======
import axios from 'axios'

jest.mock('axios')

describe('users test', () => {
	let response

	beforeEach(() => {
		response = {
			data: [
				{
					id: '1',
					name: 'Leonid Makaron'
				},
				{
					id: '2',
					name: 'Vladimir Gosh'
				},
				{
					id: '3',
					name: 'Some name'
				}
			]
		}
	})

	test('renders users list', async () => {
		axios.get.mockReturnValue(response)
		render(<Users />)
		const users = await screen.findAllByTestId('user-item')
		expect(users.length).toBe(3)
		expect(axios.get).toBeCalledTimes(1)
		screen.debug()
	})
})
