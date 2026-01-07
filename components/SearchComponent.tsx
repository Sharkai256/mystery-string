'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function SearchComponent() {
	const [inputText, setInputText] = useState("");
	const [link, setLink] = useState("")

	const inputData = {
		value: inputText
	}

	let data = {
		url: "",
		color: ""
	}

	const findPage = async () => {
		// const params = new URLSearchParams({ value: query });
		/* await fetch("http://localhost:3000/api", {
			method: "POST",
			headers: {
				'Conent-Type': 'application/json'
			},
			body: JSON.stringify(inputData)
		}).then(res => res.json()).then(data => setSpanText(data)) */
		data = await fetch("http://localhost:3000/api", {
			method: "POST",
			headers: {
				'Conent-Type': 'application/json'
			},
			body: JSON.stringify(inputData)
		}).then(res => res.json())
		setLink(data.url)
	};

	//TODO: add 'available leters' counter; change explore link color after fetch; make it one button instead of two;
	return <div className='search'>
		<input type="text" placeholder="Example: d+Xnk6F*2" maxLength={15} value={inputText} onChange={(e) => setInputText(e.target.value)} />
		<button onClick={findPage}>Ask</button>
		<Link href={link}>Explore</Link>
	</div>
}