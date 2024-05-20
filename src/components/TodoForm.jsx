import { useState } from "react";

const TodoForm = ({setTodos}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return alert("제목과 내용 모두 입력해 주세요.");

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };

    setTodos((element) => [nextTodo, ...element]);

    setTitle("");
    setContent("");
  };

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };

  const inputContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <form onSubmit={onsubmit}>
      Title <input type="text" value={title} onChange={inputTitle} />
      Content <input type="text" value={content} onChange={inputContent} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
