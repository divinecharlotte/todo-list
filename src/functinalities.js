import { getmylist } from './ui.js';
import {mylist, setList} from './localstorage.js';

const addmylist = (event) => {
  const taskGroup = document.querySelector('.todo-add');
  const newTask = taskGroup.querySelector('input')
  if (newTask.value === '') return;
  if (event.key === 'Enter' || event === 'clicked') {
    const todoElement = {
      description: newTask.value,
      completed: false,
      index: mylist.length + 1,
    };
    newTask.value = '';
    const newList = [...mylist, todoElement];
    setList(newList);
    getmylist();
  }
};

const editmylist = ({ index, event }) => {
  if (event.target.value === '') return;
  if (event.key === 'Enter') {
    mylist[index - 1].description = event.target.value;
    setList(mylist);
  }
};

const deletemylist = (targetIndex) => {
  const filterList = mylist.filter((item) => +item.index !== +targetIndex);
  const newmylist = filterList.map((item, index) => ({
    description: item.description,
    completed: item.completed,
    index: index + 1,
  }));
  setList(newmylist);
  getmylist();
};

export {
  addmylist, editmylist,  deletemylist
};