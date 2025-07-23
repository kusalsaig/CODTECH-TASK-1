# CODTECH-TASK-2
TO-DO-LIST
Name: GANTA KUSAL SAI
Company: CODTECH IT SOLUTIONS
ID:CT08DS9785
DOMAIN:WEB DEVELOPMENT 
DURATION:NOVEMBER TO DECEMBER 2024

Project Documentation
To-Do List Application

Overview:
The To-Do List application is a lightweight, user-friendly web application designed to help users manage their daily tasks efficiently. It allows users to add tasks, mark them as completed, and delete them. The application is built using HTML, CSS, and JavaScript, ensuring compatibility across most modern browsers without requiring additional libraries or frameworks.

Features:
Core Functionalities:
Add Tasks: Users can input tasks into a text field and add them to the to-do list.
Mark as Complete: Tasks can be marked as completed, applying a strikethrough style for visual distinction.
Delete Tasks: Tasks can be removed from the list when no longer needed.
Design Enhancements:
Modern and responsive design suitable for desktop and mobile.
Visual feedback for interactive elements (e.g., button hover effects).
Clear separation of completed and active tasks.

Technologies Used:
HTML: Structures the application and defines user interface components.
CSS: Styles the application, ensuring an attractive and consistent appearance.
JavaScript: Adds interactivity, including task addition, completion, and deletion.
Vs code: which is used to run the html , css , js codes.

Detailed Code Explanation:
HTML (index.html):
Defines the basic structure of the application:
A title for the webpage.
An input field and a button for adding tasks.
A container (ul) to hold task items.
Key elements:
<input>: For user input of tasks.
<button>: To trigger task addition.
<ul>: Dynamically populated with task items.

CSS (styles.css)
Handles the visual styling:
Responsive Design: Ensures usability across devices.
Hover Effects: Buttons change color when hovered over for better UX.
Task States: Differentiates completed tasks using the completed class.
Key CSS Features:
Flexbox for layout alignment.
Shadow effects for modern aesthetics.
Transitions for smooth interactions.

JavaScript (script.js)
Adds interactivity:
Task Addition: Dynamically creates a new <li> element for each task.
Completion Toggle: Adds/removes the completed class to strike through tasks.
Deletion: Removes the parent <li> of the delete button when clicked.
Key Functions:
1.add_item: Main function for adding tasks and attaching buttons.
oValidates non-empty input.
oCreates task elements dynamically.
2.Button Event Listeners:
oComplete Button: Toggles task completion.
oDelete Button: Removes the task.


Example Workflow:
Add a Task:
oInput text into the text box.
oClick the "Add" button.
oThe task appears in the list with "Complete" and "Delete" buttons.
Complete a Task:
oClick the "Complete" button for a task.
oThe task gets a strikethrough effect.
Delete a Task:
oClick the "Delete" button for a task.
oThe task is removed from the list.
Future Enhancements:
Planned Features:
Task Editing: Allow users to edit tasks directly in the list.
Persistence: Use local storage or a database to save tasks across sessions.
Sorting Options: Enable sorting by status (completed/active) or alphabetical order.
Due Dates: Add an option to set and display due dates for tasks.




Screenshots
Initial State:
![1](https://github.com/user-attachments/assets/14533d52-065c-48d0-8875-c3f0aa007121)


Adding a Task:![2](https://github.com/user-attachments/assets/07e32d4d-5f05-47aa-a0b5-92f9d90afde3)


Marking as Complete:![3](https://github.com/user-attachments/assets/0d2493d9-5575-4ca6-b41a-bea3e94f35d6)


Deleting a Task

![1](https://github.com/user-attachments/assets/14533d52-065c-48d0-8875-c3f0aa007121)





Conclusion:
The Enhanced To-Do List is a simple yet powerful web application for managing tasks. Its clean interface, responsive design, and interactive features make it a practical tool for daily task management. The project provides a solid foundation for further enhancements, including persistence and advanced features.


