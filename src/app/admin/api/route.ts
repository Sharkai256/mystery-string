// import { hashPassword, generateSalt } from "@/auth/core/passwordHash";
// import { createSession } from "@/auth/core/session"
// import { cookies } from "next/headers";

export async function POST(req: Request) {
	const body = await req.json()

	let resBody = {
		name: "not logged in",
		// salt: "",
		// hashedPassword: ""
	}
	const headers = {
		"Content-Type": "application/json"
	}

	// const salt = generateSalt()
	// const hashedPassword = await hashPassword(body.userPassword, salt)
	// console.log(salt)

	// await createSession({id: 1, role: "admin"}, await cookies())

	switch (body.userPassword) {
		case "123":
			resBody.name = "you are 123"
			// resBody.salt = salt
			// resBody.hashedPassword = hashedPassword
			break;

		default:
			break;
	}
	return new Response(JSON.stringify(resBody), { headers })
}