interface Todo {
	id: number
	title: string
}

const Page = async () => {
	let todoList;

	await fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(data => {
		todoList = data.map((todo: Todo) => {
			return <li key={todo.id}>{todo.title}</li>
		})
	})
	return <ul>{todoList}</ul>
}

export default Page;