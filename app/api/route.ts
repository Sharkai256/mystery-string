export async function POST(req: Request) {
	const body = await req.json()

	// let resBody = "/"
	let resBody = {
		url: "/",
		color: "red"
	}
	const headers = {
			"Content-Type": "application/json"
			// "Content-Type": "text/plain"
	}

	switch (body.value) {
		case "d+Xnk6F*2":
			resBody.url = "/todo"
			resBody.color = "blue"
			break;

		case "qwer":
			resBody.url = "/Y2K"
			resBody.color = "green"
			break;

		default:
			break;
	}
	// if (body.value == "qwer") {
		// resBody.url = "/Y2K"
		// resBody.color = "green"
		// resBody = "/Y2K"
	// }

	// return Response.json(resBody, { headers })
	return new Response(JSON.stringify(resBody), { headers })
}