'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function SearchComponent() {
	const [inputText, setInputText] = useState("");
	const [link, setLink] = useState("")
	const [count, setCount] = useState(15)

	const inputData = {
		value: inputText
	}

	let data = {
		url: "",
		color: ""
	}

	const findPage = async () => {
		data = await fetch("http://localhost:3000/api", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(inputData)
		}).then(res => res.json()).then()
		setLink(data.url)
		const linkElem = document.querySelector("a")
		linkElem!.style.setProperty("--link-color", data.color)
	};

	return <div className='search'>
		<span className="counter">{count}</span>
		<input type="text" placeholder="Example: d+Xnk6F*2" maxLength={15} value={inputText} onChange={(e) => {
			setInputText(e.target.value)
			setCount(15 - e.target.value.length)
			}} />
		<button onClick={findPage}>Ask</button>
		<Link href={link} className={"color-link"}>Explore</Link>
	</div>
}