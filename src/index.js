import _ from 'lodash';// eslint-disable-line
import './style.css';

import {
  getmylist, addmylist, editmylist, deletemylist,
} from './functinalities.js';
import { changeTodoStatus, removeCompletedTodos } from './todoStatus.js';

const listGroup = document.querySelector('.todo-group');
const newTask = document.querySelector('.todo-add').querySelector('input');
const submitIcon = document.querySelector('.todo-add').querySelector('i');
newTask.addEventListener('keypress', (event) => addmylist(event));
submitIcon.addEventListener('click', () => addmylist('clicked'));

listGroup.addEventListener('click', (event) => {
  const clickedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (clickedItem === 'delete-icon') deletemylist(li.id);
  if (clickedItem === 'checked-icon') changeTodoStatus({ index: li.id, status: false });
  if (clickedItem === 'unchecked-icon') changeTodoStatus({ index: li.id, status: true });
});

listGroup.addEventListener('keypress', (event) => {
  const pressedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (pressedItem === 'edit-todo') editmylist({ index: li.id, event });
});

const clearCompleted = document.querySelector('.clear-todo');
clearCompleted.addEventListener('click', removeCompletedTodos);

window.addEventListener('load', () => { getmylist(); });
