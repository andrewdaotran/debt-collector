import { NextRequest, NextResponse } from 'next/server'
import User from '@/models/User'

export async function POST(req: NextRequest) {
	try {
		const { user, amountOwed } = await req.json()
		const newUser = new User({ user, amountOwed })
		await newUser.save()
		return NextResponse.json(newUser, { status: 201 })
	} catch (e) {
		console.error(e)
		return NextResponse.json({
			message: 'User Creation Failed',
			error: e instanceof Error ? e.message : 'Unknown',
		})
	}
}

export async function GET() {
	const users = [
		{
			user: 'Ashley',
			amountOwed: '$4526.19',
		},
		{
			user: 'Mom',
			amountOwed: '$1723.38',
		},
		{
			user: 'Nancy',
			amountOwed: '$1109.72',
		},
	]

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

	try {
		return NextResponse.json({ message: 'Received users successfully!', users })
	} catch (e) {
		console.log(e)
		return NextResponse.json({ message: 'Failed users retrieval' })
	}
}
