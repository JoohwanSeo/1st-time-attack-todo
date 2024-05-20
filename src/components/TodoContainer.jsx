import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const WorkingTodo = todos.filter((todo) => !todo.isDone);
  const DoneTodo = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <h1>ToDo</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList title="Working" todos={WorkingTodo} setTodos={setTodos} />
      <TodoList title="Done" todos={DoneTodo} setTodos={setTodos} />
    </div>
  );
};

export default TodoContainer;
