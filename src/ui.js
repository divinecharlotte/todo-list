import { ls } from "./localstorage";

const getmylist = () => {
  let mylist = ls();
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
  return document.querySelector('.todo-group').innerHTML = mylistElement;
  
};


export { getmylist  }

