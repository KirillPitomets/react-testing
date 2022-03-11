import React, { useEffect, useState } from 'react'

const App = () => {
	const [data, setData] = useState({})
	const [toggle, setToggle] = useState(false)
	const [value, setValue] = useState('')

	const onClick = () => setToggle(prev => !prev)

	useEffect(() => {
		setTimeout(() => {
			setData({ role: 'Admin' })
		}, 500)
	}, [])

	return (
		<div>
			{toggle ? <div data-testid='toggle-elem'>Toggle</div> : null}
			{data && <div>{data.role}</div>}

			<h1
				style={{
					color: 'purple',
					textAlign: 'center',
					fontFamily: 'Roboto'
				}}
				data-testid='value-h1'
			>
				{value}
			</h1>

			<div>
				<input onChange={e => setValue(e.target.value)} type='text' placeholder='User name' />
				<button onClick={onClick} data-testid='toggle-btn'>
					Click me
				</button>
			</div>
		</div>
	)
}

export default App

