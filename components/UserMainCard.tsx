import React from 'react'
import { UserType } from '@/typings'

const UserMainCard = ({ user, amountOwed }: UserType) => {
	return (
		<li className='border border-green-500 p-4 text-center'>
			<h3 className=' text-2xl font-bold pb-4'>{user}</h3>
			<p>Amount Owedddd:</p>
			<p>{amountOwed}</p>
			<p>{amountOwed}</p>
			<p>{amountOwed}</p>
			<p>{amountOwed}</p>
			<p>{amountOwed}</p>
		</li>
	)
}

export default UserMainCard
