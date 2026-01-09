'use client'
import AdminLogin from "@/components/AdminLogin"
// import { useState } from "react";
 //TODO: on log in - localStorage.setItem() => force reload / redirect
export default function Page() {
	const userName = "default"

	// const userName = useEffect(() => {
	// 	const storedValue = localStorage.getItem("name");
	// 	return storedValue ? JSON.parse(storedValue) : "default";
	// });

	return <>
		<h1>this is an admin page. log in to access more stuff</h1>
		<h1 style={{display: "block"}}>you are logged in as {userName}</h1>
		<AdminLogin></AdminLogin>
	</>
}