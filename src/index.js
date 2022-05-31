// import _ from 'lodash';
import './style.css';

const mylist = [
  {
    description: 'house chores',
    completed: false,
    index: 1,
  },
  {
    description: 'side project',
    completed: false,
    index: 2,
  },
  {
    description: 'today projects',
    completed: true,
    index: 3,
  },
  {
    description: '4hackerranck challenges',
    completed: false,
    index: 4,
  },
];

const getmylist = () => {
  const listGroup = document.querySelector('.todo-group');
  mylist.map((item) => {
    const listElement = document.createElement('li');
    listElement.classList = 'todo-list todo-item';
    listElement.id = `${item.index}`;
    listElement.innerHTML = `
        <button type="button" class=${
  item.completed === true ? 'checked-button' : 'unchecked-button'
}>
        <i class="fa-solid fa-check"></i></button>
        <input type="text" class=${
  item.completed === true ? 'decoration' : 'undecoration'
}  value="${item.description}">
        <span class="todo-item-more"><i class="fa-solid fa-ellipsis-vertical"></i></span>
    `;
    return listGroup.appendChild(listElement);
  });
};
window.addEventListener('load', getmylist);

// function component() {
//   const element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());