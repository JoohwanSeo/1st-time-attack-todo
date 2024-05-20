
const TodoItem = ({todo, setTodos}) => {
const {id, title, content, isDone} = todo

const deleteTodo = () => {
  setTodos((e) => e.filter((todo) => todo.id !== id))
}
const complateTodo = () => {
  setTodos((e) =>
     e.map((todo) =>
       todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
}

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>

      <div>
        <button onClick={complateTodo}>{isDone ? 'Cancel' : 'Complete'}</button>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem