import { getmylist } from './ui.js';
import { ls, setList } from './localstorage.js';

const addmylist = (event) => {
  const mylist = ls();
  const taskGroup = document.querySelector('.todo-add');
  const newTask = taskGroup.querySelector('input');
  if (newTask.value === '') return;
  if (event.key === 'Enter' || event === 'clicked') {
    const todoElement = {
      description: newTask.value,
      completed: false,
      index: mylist.length + 1,
    };
    newTask.value = '';
    mylist.push(todoElement);
    setList(mylist);
    getmylist();
  }
};

const editmylist = ({ index, event }) => {
  const mylist = ls();
  if (event.target.value === '') return;
  if (event.key === 'Enter') {
    mylist[index - 1].description = event.target.value;
    setList(mylist);
  }
};

const deletemylist = (targetIndex) => {
  const mylist = ls();
  const filterList = mylist.filter(({ index }) => index !== parseInt(targetIndex));
  const newmylist = filterList.map((item, i) => {
    item.index = i + 1;
    return item;
  });
  setList(newmylist);
  getmylist();
};

export {
  addmylist, editmylist, deletemylist,
};