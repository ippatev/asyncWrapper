const asyncWrapper = async(asyncFunc, params = null) => {
  try {
    const data = await asyncFunc(params);
    return [data, null]
  } catch(err) {
    return [null, err]
  }
}

const fetchTodosRequest = () => fetch("https://jsonplaceholder.typicode.com/todos");

const handleFetchAllClick = async() => {
  const [todos, haveError] = await asyncWrapper(fetchTodosRequest)
  const todosJson = await todos.json()
  console.log(todosJson)
}

handleFetchAllClick()