'use client'
import { useRouter } from 'next/navigation';
import { FormEvent } from "react";

export default function loginPage() {
	const router = useRouter()
	// const [inputUser, setInputUser] = useState("")
	// const [inputPass, setInputPass] = useState("")

	// const reqBody = {
	// 	userName: inputUser,
	// 	userPassword: inputPass
	// }

	// const login = async () => {
	// 	const data = await fetch("http://localhost:3000/admin/api", {
	// 		method: "POST",
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify(reqBody)
	// 	}).then(res => res.json()).then()

	// 	console.log(data)
	// };

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const email = formData.get('email')
		const password = formData.get('password')

		const response = await fetch('/login/api', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password }),
		})

		if (!response.ok) console.log("Error occured")

		response.json().then(data => {
			// if (data.authentificated) router.push("/admin")
			console.log(data)
		})
	}

	// return <>
	// 	<input
	// 		type="text"
	// 		placeholder="username"
	// 		maxLength={15}
	// 		value={inputUser}
	// 		onChange={(e) => setInputUser(e.target.value)}
	// 	/>
	// 	<input
	// 		type="text"
	// 		placeholder="password"
	// 		maxLength={15}
	// 		value={inputPass}
	// 		onChange={(e) => setInputPass(e.target.value)}
	// 	/>
	// 	<button onClick={login}>login</button>
	// </>

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="email" placeholder="Email" required />
			<input type="text" name="password" placeholder="Password" required />
			<button type="submit">Login</button>
		</form>
	)
}