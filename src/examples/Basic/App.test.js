import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

/*
	fireEvent = искусственные события
	userEvent = для полной эмуляции пользователя /mouseUp, mouseDown, keyDown, keyUp/
*/ 

describe('Test APP', () => {
	test('should renders hello developer', () => {
		render(<App />)

		const helloDeveloper = screen.queryByTestId('value-h1')
		const button = screen.getByRole('button')
		const input = screen.getByPlaceholderText(/User name/i)

		expect(helloDeveloper).toBeInTheDocument()
		expect(button).toBeInTheDocument()
		// expect(input).toBeInTheDocument()q
		expect(input).toMatchSnapshot()
		screen.debug()
	})

	test('getBy, queryBy, findBy methods ', async () => {
		render(<App />)
		// const helloDeveloperElem = screen.
		// Есть разные методы для поиска элемента со страницы
		/*
      getBy or getAll он должен обязательно найти элемент.
        В ином случае ошибка
         
      queryBy or queryAll используется для доказательства что 
        элемент нету

      findBy or findAll используется для асинхронных действий
    */
		// =========== queryBy ===========
		// const helloWorldElem = screen.queryByText(/hello world/i)
		// expect(helloWorldElem).toBeNull()
		screen.debug()
		const helloWorldElem = await screen.findByText(/Admin/i)
		expect(helloWorldElem).toBeInTheDocument()
		screen.debug()
	})

	test('click event', () => {
		render(<App />)
		// fireEvent искусственные события
		const btn = screen.getByTestId('toggle-btn')
		expect(screen.queryByTestId('toggle-elem')).toBeNull()
		fireEvent.click(btn)
		expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
		fireEvent.click(btn)
		expect(screen.queryByTestId('toggle-elem')).toBeNull()
	})

	test('input event', () => {
		render(<App />)
		const valueForWriteInInput = 'Hello Kirill'
		const input = screen.getByPlaceholderText(/User name/i)

		// toContainHTML('') проверка на value в элементе

		expect(screen.queryByTestId('value-h1')).toContainHTML('')
		// fireEvent.input(input, {
		// 	target: { value: valueForWriteInInput }
		// })
		userEvent.type(input, valueForWriteInInput)

		expect(screen.queryByTestId('value-h1')).toContainHTML(valueForWriteInInput)


		// expect(screen.queryByTestId('value-h1')).toBeNull()
	})
})
