# To-Do-List
This program performs the following functions:

1. Adding a task:
   - When the addBtn is clicked, a new task is created.
   - The task is appended to an unordered list (ul) element with the id "list".
   - The task consists of a span element containing the task title, a remove button (rmBtn), and an SVG icon for text-to-speech functionality.
   - The task is populated with the value entered in the inpbox (input box).
   - The task's remove button is assigned a click event listener that removes the task from the list, deletes its corresponding data from localStorage, and 
     triggers the saveData function to update the saved data.
   - The inpbox value is cleared.
   - The task's SVG icon is assigned a click event listener that reads aloud the task title using text-to-speech functionality.

2. Saving and showing data:
   - The saveData function is responsible for storing the list's innerHTML (including all the tasks) in the localStorage with the key "data".
   - The showData function retrieves the saved data from localStorage and displays it in the list by assigning the saved innerHTML to the list element.

3. Removing a task:
   - The code sets up event listeners for all remove buttons (rmBtn) in the list using a loop.
   - When a remove button is clicked, its parent li element (the task) is removed from the list.
   - The task's corresponding data is removed from localStorage.
   - The console.log statement logs the removed task for debugging purposes.

4. Text-to-speech functionality:
   - The code sets up event listeners for all SVG icons in the list using a loop.
   - When an SVG icon is clicked, it retrieves the task title from its previous sibling span element.
   - A SpeechSynthesisUtterance object is created with the task title.
   - The window.speechSynthesis.speak method is called to speak the task title aloud.

These functions collectively allow for adding, removing, saving, showing, and providing text-to-speech functionality for tasks in the To-Do list application.
