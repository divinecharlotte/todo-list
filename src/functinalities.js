let mylist = JSON.parse(localStorage.getItem('mylist')) || [];// eslint-disable-line

const listGroup = document.querySelector('.todo-group');
const newTask = document.querySelector('.todo-add').querySelector('input');
const getmylist = () => {
  const mylistElement = mylist.map((item) => `
        <li class="todo-list todo-item" id=${item.index}>
          ${item.completed === true ? `
            <i class="fa-solid fa-check checked-icon"></i>`
    : '<i class="fa-solid fa-square unchecked-icon"></i>'}
          <input type="text" class=${item.completed === true ? 'decoration edit-todo' : ' edit-todo'}  value="${item.description}">
          <span class="edit-focus-element"></span>
          <i class="fa-solid fa-trash-can delete-icon"></i>
          <i class="fa-solid fa-ellipsis-vertical more-icon"></i>
        </li>`).join('');
  listGroup.innerHTML = mylistElement;
  return listGroup;
};
const updateUI = (data) => {
  mylist = data;
  getmylist();
};

const addmylist = (event) => {
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
  getmylist, addmylist, editmylist, deletemylist, mylist, updateUI,
};