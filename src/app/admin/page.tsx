'use client'
export default function Page() {
	const admin = {
		name: "name"
	}

	return <>
		<h1>this is an admin page.</h1>
		<h1>
			{admin == null
			? "could not load user info"
			: `you are logged in as: ${admin.name}`}
		</h1>
	</>
}