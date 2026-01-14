// import { createSession } from "./session"

type User = {
	id: string
	name: string,
	email: string,
	password: string
}

const users: User[] = [
	{
		id: "1",
		name: "user1",
		email: "123",
		password: "123",
	},
	{
		id: "2",
		name: "user2",
		email: "321",
		password: "321",
	},
]

//TODO: authorization;

export async function POST(req: Request) {
	const body = await req.json()

	let resBody = {
		name: "user does not exist"
	}

	const headers = {
		"Content-Type": "application/json"
	}

	users.map(/* async */ user => {
		if (user.email == body.email && user.password == body.password) {
			resBody.name = user.name
			// await createSession(user.id)
			return
		}
	})

	return new Response(JSON.stringify(resBody), { headers })
}