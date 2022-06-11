/**
 * @jest-environment jsdom
 */

import { addmylist, deletemylist } from '../src/functinalities';

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
        const newListLength = newList.length;

        // Assert
        expect(newListLength).toBe(mylist.length + 1);
        expect(newList[newListLength-1].description).toBe("new task");
    });

    test("Removing item", () => {
        // Arrange
        const mylist = JSON.parse(localStorage.getItem('mylist'));
        
        // Act
        deletemylist(1);
        const newList = JSON.parse(localStorage.getItem('mylist'));

        // Assert
        expect(newList.length).toBe(mylist.length - 1); 
    });
});

