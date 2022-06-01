// import _ from 'lodash';
import './style.css';
import {
  getmylist, addmylist, editmylist, deletemylist,
} from './functinalities.js';

const listGroup = document.querySelector('.todo-group');
const newTask = document.querySelector('.todo-add').querySelector('input');
const submitIcon = document.querySelector('.todo-add').querySelector('i');
newTask.addEventListener('keypress', (event) => addmylist(event));
submitIcon.addEventListener('click', () => addmylist('clicked'));

listGroup.addEventListener('click', (event) => {
  const clickedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (clickedItem === 'delete-icon') deletemylist(li.id);
});

listGroup.addEventListener('keypress', (event) => {
  const pressedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (pressedItem === 'edit-todo') editmylist({ index: li.id, event });
});

window.addEventListener('load', () => { getmylist(); });

// const mylist = [];

// const getmylist = () => {
//   const listGroup = document.querySelector('.todo-group');
//   mylist.map((item) => {
//     const listElement = document.createElement('li');
//     listElement.classList = 'todo-list todo-item';
//     listElement.id = `${item.index}`;
//     listElement.innerHTML = `
//         <button type="button" class=${
//   item.completed === true ? 'checked-button' : 'unchecked-button'
// }>
//         <i class="fa-solid fa-check"></i></button>
//         <input type="text" class=${
//   item.completed === true ? 'decoration' : 'undecoration'
// }  value="${item.description}">
//         <span class="todo-item-more"><i class="fa-solid fa-ellipsis-vertical"></i></span>
//     `;
//     return listGroup.appendChild(listElement);
//   });
// };
// window.addEventListener('load', getmylist);
