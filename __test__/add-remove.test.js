/**
 * @jest-environment jsdom
 */

import { addmylist } from '../src/functinalities';


describe('Add and remove testing', () => {
    test('Add testing', () => {
        // Arrange
        document.body.innerHTML =
            '<div class="todo-list todo-add">' +
            '<input type="text" placeholder="Add to your list" value="new task">' +
            '<i class="fa-solid fa-arrow-left-long"></i>' +
            '</div>';
        
            
        const mylist = JSON.parse(localStorage.getItem('mylist')) || [];
        console.log("Before:",mylist);
        // Act
        addmylist('clicked');
        console.log('After Click:',JSON.parse(localStorage.getItem('mylist')));
    });
})