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
      state.toDoList = state.toDoList.filter(
        (item) => item.id !== action.payload
      );
    },
    doneTodoRTK: (state, action) => {
      state.toDoList.map((item) => {
        if (item.id === action.payload.id) {
          item.done = !item.done;
        }
      });
    },
    editTodoRTK: (state, action) => {
      state.toDoList.map((item) => {
        if (item.id === action.payload.id) {
          item.edit = !item.edit;
        }
      });
    },
    updateTodoRTK: (state, action) => {
      state.toDoList.map((item) => {
        if (item.id === action.payload.id) {
          item.edit = false;
          item.task = action.payload.editTaskValue;
        }
      });
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
