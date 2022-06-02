import { mylist, getmylist, updateUI } from './functinalities.js';

const changeTodoStatus = ({ index, status }) => {
  mylist[index - 1].completed = status;
  localStorage.setItem('mylist', JSON.stringify(mylist));
  getmylist();
};
const removeCompletedTodos = () => {
  const uncompletedTodos = mylist.filter((element) => element.completed !== true);
  const newTodos = uncompletedTodos.map((element, index) => {
    element.index = index + 1;
    return element;
  });
  localStorage.setItem('mylist', JSON.stringify(newTodos));
  updateUI(newTodos);
};

export { changeTodoStatus, removeCompletedTodos };