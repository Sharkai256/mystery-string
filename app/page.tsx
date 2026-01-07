// import Form from "@/components/Form"
import SearchComponent from "@/components/SearchComponent"
import Link from "next/link"

export default function Home() {
	return <>
			<h1>Mystery string! Try your luck and enter a random string here.</h1>
			<SearchComponent></SearchComponent>
			<br></br>
			<Link href="/todo">todo list here</Link>
	</>
}