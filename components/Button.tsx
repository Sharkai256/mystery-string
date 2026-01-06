'use client'

//TODO: on click: read input and send it to server;
export default function Button() {

	/* const getPage = () => {
		fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then((data) => {
			console.log(data)
			return <p>{data}</p>
		})
	} */

	return <button onClick={() => console.log("check this string")}>check this string</button>
}