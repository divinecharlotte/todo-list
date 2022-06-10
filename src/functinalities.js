import { getmylist } from './ui.js';

let mylist = JSON.parse(localStorage.getItem('mylist')) || [];// eslint-disable-line

const updateUI = (data) => {
  mylist = data;
  getmylist();
};

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
    mylist = [...mylist, todoElement];
    localStorage.setItem('mylist', JSON.stringify(mylist));
    getmylist();
  }
};

const editmylist = ({ index, event }) => {
  if (event.target.value === '') return;
  if (event.key === 'Enter') {
    mylist[index].description = event.target.value;
    localStorage.setItem('mylist', JSON.stringify(mylist));
  }
};

const deletemylist = (targetIndex) => {
  const filterList = mylist.filter((item) => +item.index !== +targetIndex);
  const newmylist = filterList.map((item, index) => ({
    description: item.description,
    completed: item.completed,
    index: index + 1,
  }));
  localStorage.setItem('mylist', JSON.stringify(newmylist));
  mylist = newmylist;
  getmylist();
};

export {
  addmylist, editmylist, deletemylist, mylist, updateUI,
};