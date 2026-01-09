'use client'
import { useState } from "react";

// const persistedState = (key: string, defaultValue: string) => {
// 	const [state, setState] = useState(() => {
// 		const storedValue = localStorage.getItem(key);
// 		return storedValue ? JSON.parse(storedValue) : defaultValue;
//   	});

// 	useEffect(() => {
// 		localStorage.setItem(key, JSON.stringify(state));
// 	}, [key, state]);

// 	return [state, setState];
// }

export default function AdminLogin() {
	const [inputUser, setInputUser] = useState("")
	const [inputPass, setInputPass] = useState("")
	// let [userName, setUserName] = persistedState("name", "default")

	const reqBody = {
		userName: inputUser,
		userPassword: inputPass
	}

	const login = async () => {
		const data = await fetch("http://localhost:3000/admin/api", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(reqBody)
		}).then(res => res.json()).then()

		console.log(data)
		// setUserName(data.name)
		// console.log("new user name: " + useName)
	};

	return <>
		<input
			type="text"
			placeholder="username"
			maxLength={15}
			value={inputUser}
			onChange={(e) => setInputUser(e.target.value)}
		/>
		<input
			type="text"
			placeholder="password"
			maxLength={15}
			value={inputPass}
			onChange={(e) => setInputPass(e.target.value)}
		/>
		<button onClick={login}>login</button>
	</>
}