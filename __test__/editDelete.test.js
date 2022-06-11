import { editmylist } from '../src/functinalities.js';
import { ls, setList } from '../src/localstorage';

describe("Edit Task Description", () => {
    test("Editing Tasks", () => {
        // Arrange
        const inputObject = {
          index: 1,
          event: {
            key: "Enter",
            target: {
              value: "updated item",
            },
          },
        };
        
        const editableStorage = [
          {
            index: 1,
            description: 'test',
          }
        ]
        setList(editableStorage);

        // Act
        editmylist(inputObject);
        const editedlist = ls();
    
        // Assert
        expect(editedlist[inputObject.index - 1].description).toBe("updated item");
      });
})