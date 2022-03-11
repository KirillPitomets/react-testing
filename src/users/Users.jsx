import React, { useState, useEffect } from 'react'
// ======= Axios ======
import axios from 'axios'
const Users = () => {
	const [users, setUsers] = useState([])

	const loadUsers = async () => {
		const url = 'https://jsonplaceholder.typicode.com/users'
		const resp = await axios.get(url)
		setUsers(resp.data)
	}

	useEffect(() => {
		loadUsers()
	}, [])

	return (
		<div>
			{users.map(user => (
				<div key={user.id} data-testid='user-item'>
					{user.name}
				</div>
			))}
		</div>
	)
}

export default Users
