import { editmylist } from '../src/functinalities';
import { ls, setList } from '../src/localstorage';
import { changeTodoStatus, removeCompletedTodos } from '../src/todoStatus';

jest.mock('../src/ui');

const editableStorage = [
  {
    index: 1,
    description: 'test',
    completed: false,
  },
  {
    index: 2,
    description: 'test2',
    completed: false,
  },
  {
    index: 3,
    description: 'test3',
    completed: false,
  },
];

describe('Edit Task Description', () => {
  test('Editing Tasks', () => {
    // Arrange
    const inputObject = {
      index: 2,
      event: {
        key: 'Enter',
        target: {
          value: 'updated item',
        },
      },
    };
    setList(editableStorage);

    // Act
    editmylist(inputObject);
    const editedlist = ls();

    // Assert
    expect(editedlist[inputObject.index - 1].description).toBe('updated item');
  });
});

describe('Completed Task Description', () => {
  test('Status Update', () => {
    // Arrange
    const setUp = {
      index: 3,
      status: true,
    };

    // Act
    changeTodoStatus(setUp);
    const newLS = ls();

    // Assert
    expect(newLS[setUp.index - 1].completed).toBeTruthy();
  });

  test('REmove Completed', () => {
    // Act
    removeCompletedTodos();
    const newLS = ls();

    // Assert
    expect(newLS.length).toBeLessThan(editableStorage.length);
  });
});