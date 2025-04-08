import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  toDoList: [],
};

const todoSliceRTK = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoRTK: (state, action) => {
      state.toDoList.push({
        id: uuidv4(),
        task: action.payload.task,
        done: false,
        edit: false,
      });
    },
    deleteTodoRTK: (state, action) => {
      const index = state.toDoList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.toDoList.splice(index, 1);
    },
    doneTodoRTK: (state, action) => {
      const index = state.toDoList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.toDoList[index].done = !state.toDoList[index].done;
    },
    editTodoRTK: (state, action) => {
      const index = state.toDoList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.toDoList[index].edit = !state.toDoList[index].edit;
    },
    updateTodoRTK: (state, action) => {
      const index = state.toDoList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.toDoList[index].edit = false;
      state.toDoList[index].task = action.payload.editTaskValue;
    },
  },
});

export const {
  addTodoRTK,
  deleteTodoRTK,
  doneTodoRTK,
  editTodoRTK,
  updateTodoRTK,
} = todoSliceRTK.actions;

export default todoSliceRTK.reducer;

export const selectToDoList = (state) => state.todo.toDoList;
