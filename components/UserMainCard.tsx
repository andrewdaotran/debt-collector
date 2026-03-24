import React from 'react'
import { UserType } from '@/typings'

const UserMainCard = ({ user, amountOwed }: UserType) => {
	return (
		<li>
			<p>{user}</p>
			<p>{amountOwed}</p>
		</li>
	)
}

export default UserMainCard
