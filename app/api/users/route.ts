import { NextRequest, NextResponse } from 'next/server'

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

	try {
		return NextResponse.json({ message: 'Received users successfully!', users })
	} catch (e) {
		console.log(e)
		return NextResponse.json({ message: 'Failed users retrieval' })
	}
}
