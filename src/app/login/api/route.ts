type User = {
	name: string,
	email: string,
	password: string
}

const users: User[] = [
	{
		name: "user1",
		email: "123",
		password: "123",
	},
	{
		name: "user2",
		email: "321",
		password: "321",
	},
]

//TODO: session management; authorization;

export async function POST(req: Request) {
	const body = await req.json()

	let resBody = {
		name: "user does not exist"
	}

	const headers = {
		"Content-Type": "application/json"
	}

	users.map(user => {
		if (user.email == body.email && user.password == body.password) {
			resBody.name = user.name
			return
		}
	})

	return new Response(JSON.stringify(resBody), { headers })
}