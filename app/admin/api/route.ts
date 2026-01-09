export async function POST(req: Request) {
	const body = await req.json()

	let resBody = {
		name: "not logged in",
	}
	const headers = {
			"Content-Type": "application/json"
	}

	switch (body.userPassword) {
		case "password1":
			resBody.name = "111111"
			break;

		case "password2":
			resBody.name = "222222"
			break;

		default:
			break;
	}
	return new Response(JSON.stringify(resBody), { headers })
}