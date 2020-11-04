import React, { useState } from "react";
import { initialTodos } from "./initialTodos";
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <div>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
