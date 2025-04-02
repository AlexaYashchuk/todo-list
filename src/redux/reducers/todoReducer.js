import {
  ADD_TODO,
  DELETE_TODO,
  DONE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
} from "../actions/todoActions";

const initialState = {
  toDoList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        toDoList: [...state.toDoList, { ...action.payload }],
      };
    case DELETE_TODO:
      return {
        ...state,
        toDoList: state.toDoList.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case DONE_TODO:
      return {
        ...state,
        toDoList: state.toDoList.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              done: !item.done,
            };
          }
          return item;
        }),
      };
    case EDIT_TODO:
      return {
        ...state,
        toDoList: state.toDoList.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              edit: !item.edit,
            };
          }
          return item;
        }),
      };
    case UPDATE_TODO:
      return {
        ...state,
        toDoList: state.toDoList.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              task: action.payload.task,
              edit: false,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export { todoReducer };
