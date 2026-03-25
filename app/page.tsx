import UserMainCard from '@/components/UserMainCard'
import Image from 'next/image'
import { UserType } from '@/typings'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default async function Home() {
	// const res = await fetch(`http://localhost:3000/api/users`)
	const res = await fetch(`${BASE_URL}/api/users`)
	const { users } = await res.json()
	// const users = [
	// 	{
	// 		user: 'Ashley',
	// 		amountOwed: '$4526.19',
	// 	},
	// 	{
	// 		user: 'Mom',
	// 		amountOwed: '$1723.38',
	// 	},
	// 	{
	// 		user: 'Nancy',
	// 		amountOwed: '$1109.72',
	// 	},
	// 	{
	// 		user: 'Andrew',
	// 		amountOwed: '$100000.72',
	// 	},
	// 	{
	// 		user: 'Tom',
	// 		amountOwed: '$100000.72',
	// 	},
	// ]

	return (
		<div>
			<ul className='border border-red-500 grid justify-items-center items-center gap-10'>
				{users &&
					users.length > 0 &&
					users.map((user: UserType) => (
						<UserMainCard key={user.user} {...user} />
					))}
			</ul>
			<h1>HELLLOOOO</h1>
			<h1>HELLLOOOO</h1>
			<h1>HELLLOOOO</h1>
			<h1>HELLLOOOO</h1>
			<h1>HELLLOOOO</h1>
			<h1>HELLLOOOO</h1>
		</div>
	)
}
