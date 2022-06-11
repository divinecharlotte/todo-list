import { getmylist } from './ui.js';
import {mylist, setList} from './localstorage.js';

const changeTodoStatus = ({ index, status }) => {
  mylist[index - 1].completed = status;
  setList(mylist);
  getmylist();
};
const removeCompletedTodos = () => {
  const uncompletedTodos = mylist.filter((element) => element.completed !== true);
  const newTodos = uncompletedTodos.map((element, index) => {
    element.index = index + 1;
    return element;
  });
  setList(newTodos);
  getmylist();
};

export { changeTodoStatus, removeCompletedTodos };