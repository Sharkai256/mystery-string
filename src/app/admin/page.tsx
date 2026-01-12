'use client'
export default function Page() {
	const user = {
		name: "default",
		role: "user"
	}
	// const user = {
	// 	name: "ADMIN",
	// 	role: "admin"
	// }

	return <>
		<h1>this is an admin page.</h1>
		<h1>
			{user == null
			? "could not load user info"
			: `you are logged in as: ${user.name}`}
		</h1>
	</>
}