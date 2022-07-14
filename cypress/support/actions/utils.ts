import {ToDo} from '../types'
export const snapshotData = (data: Array<ToDo>) => {
  localStorage.setItem("react-todos", JSON.stringify(data));
};

export const getUncompletedTodos = (data: Array<ToDo>, res: Array<string>) => {
  data.forEach((todo: ToDo) => {
    if (todo.completed !== true) {
      res.push(todo.title);
    }
  });
};

export const getCompletedTodos = (data: Array<ToDo>, res: Array<string>) => {
  data.forEach((todo: ToDo) => {
    if (todo.completed === true) {
      res.push(todo.title);
    }
  });
};
