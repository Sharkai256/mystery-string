import Form from "@/components/Form"
import Link from "next/link"
//TODO: loading skeleton;

export default function Home() {
	return <>
			<h1>Mystery string! Try your luck and enter a random string here. You can use symbols, numbers and even special symbols.</h1>
			<Form></Form>
			<Link href="/todo">todo list here</Link>
	</>
}