import React, { useState, ChangeEvent, FormEvent } from "react";
import { ButtonBase } from "./SC-ButtonBase";
import { InputField } from "./SC-InputField";
// import { AddTodo } from "./types";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <InputField type="text" placeholder="Type todo here" value={newTodo} onChange={handleChange} />
      <ButtonBase type="submit" onClick={handleSubmit}>
        Add Todo
      </ButtonBase>
    </form>
  );
};
