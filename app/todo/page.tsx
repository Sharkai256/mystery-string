interface Todo {
	id: number
	title: string
}

const Page = async () => {
	let todoList;
	// const res = await fetch("https://jsonplaceholder.typicode.com/todos")
	// const data: Todo[] = await res.json()
	await fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(data => {
		todoList = data.map((todo: Todo) => {
			return <li key={todo.id}>{todo.title}</li>
		})
	})
	return <ul>{todoList}</ul>
	// const todoList = data.map((todo, _) => {
	// 	return <li key={todo.id}>{todo.title}</li>
	// })

	// return <ul>{todoList}</ul>
}

export default Page;