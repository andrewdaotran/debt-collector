import UserMainCard from '@/components/UserMainCard'
import Image from 'next/image'
import { UserType } from '@/typings'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default async function Home() {
	const res = await fetch(`${BASE_URL}/api/users`)
	const { users } = await res.json()

	return (
		<div>
			<ul className='border border-red-500 grid justify-items-center items-center gap-10'>
				{users &&
					users.length > 0 &&
					users.map((user: UserType) => (
						<UserMainCard key={user.user} {...user} />
					))}
			</ul>
		</div>
	)
}
