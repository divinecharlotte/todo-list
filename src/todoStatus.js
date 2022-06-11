import { getmylist } from './ui.js';
import {ls, setList} from './localstorage.js';

const changeTodoStatus = ({ index, status }) => {
  let mylist = ls();
  mylist[index - 1].completed = status;
  setList(mylist);
  getmylist();
};
const removeCompletedTodos = () => {
  let mylist = ls();
  const uncompletedTodos = mylist.filter(({ completed }) => completed !== true);
  const newTodos = uncompletedTodos.map((element, index) => {
    element.index = index + 1;
    return element;
  });
  setList(newTodos);
  getmylist();
};

export { changeTodoStatus, removeCompletedTodos };