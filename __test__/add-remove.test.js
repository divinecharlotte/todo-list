/**
 * @jest-environment jsdom
 */

import { addmylist } from '../src/functinalities';

jest.mock('../src/ui');

describe('Add and remove testing', () => {
    test('Add testing', () => {
        // Arrange
        document.body.innerHTML =
            '<div class="todo-list todo-add">' +
            '<input type="text" placeholder="Add to your list" value="new task">' +
            '<i class="fa-solid fa-arrow-left-long"></i>' +
            '</div>';
        
        const mylist = JSON.parse(localStorage.getItem('mylist')) || [];
        
        // Act
        addmylist('clicked');
        const newList = JSON.parse(localStorage.getItem('mylist'));

        // Assert
        expect(newList.length).toBe(mylist.length + 1);
        expect(newList[0].description).toBe("new task");
    });
})