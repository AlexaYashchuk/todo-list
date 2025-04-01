import { v4 as uuidv4 } from "uuid";

export const ADD_TODO = "ADD_TODO";
export const addToDoActions = (task) => ({
  type: "ADD_TODO",
  payload: {
    id: uuidv4(),
    task,
    done: false,
    edit: false,
  },
});

export const DELETE_TODO = "DELETE_TODO";
export const deleteTodoAction = (id) => ({
  type: "DELETE_TODO",
  payload: { id },
});

export const DONE_TODO = "DONE_TODO";
export const doneTodoAction = (id) => ({
  type: "DONE_TODO",
  payload: { id },
});

export const EDIT_TODO = "EDIT_TODO";
export const editTodoAction = (id) => ({
  type: "EDIT_TODO",
  payload: { id },
});

export const UPDATE_TODO = "UPDATE_TODO";
export const updateTodoAction = (id, task) => ({
  type: "UPDATE_TODO",
  payload: { id, task },
});
