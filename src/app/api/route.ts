export async function POST(req: Request) {
	const body = await req.json();

	let resBody = {
		url: "/",
		color: "red"
	}

	const headers = {
			"Content-Type": "application/json"
	}

	switch (body.value) {
		case "d+Xnk6F*2":
			resBody.url = "/todo";
			resBody.color = "blue";
			break;

		case "qwer":
			resBody.url = "/y2k";
			resBody.color = "green";
			break;

		default:
			break;
	}
	return new Response(JSON.stringify(resBody), { headers });
}