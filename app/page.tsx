import UserMainCard from '@/components/UserMainCard'
import Image from 'next/image'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

interface UserType {
	user: String
	amountOwed: String
}

export default async function Home() {
	const res = await fetch(`${BASE_URL}/api/users`)
	const { users } = await res.json()

	console.log(users)

	return (
		<div>
			<ul>
				{users &&
					users.length > 0 &&
					users.map((user: UserType) => (
						<li key={user.user}>
							<p>{user.user}</p>
							<p>{user.amountOwed}</p>
						</li>
					))}
			</ul>
		</div>
	)
}
