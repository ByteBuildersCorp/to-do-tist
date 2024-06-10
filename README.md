# To-Do List Web App

A simple and intuitive To-Do List web application that allows users to manage their daily tasks.
Users can add, delete, and mark tasks as complete. The tasks are saved in the browser's local storage, so they persist even after refreshing the page.

## Features

- Add new tasks with a title and description.
- Display tasks with a timestamp indicating when they were added.
- Mark tasks as complete or pending.
- Delete tasks.
- Separate sections for pending tasks and completed tasks.

## Technologies Used

- HTML
- CSS
- JavaScript
- Local Storage

## Getting Started

To get a local copy up and running follow these simple steps:

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repo

```sh
  git clone https://github.com/ByteBuildersCorp/to-do-tist.git
Usage
1.Open the index.html file in your web browser.
2.Enter a title and description for your task in the input fields.
3.Click the "Save" button to add the task to the pending tasks list.
4.View your tasks in the "Pending Tasks" and "Completed Tasks" sections.
5.Use the "Delete" button to remove a task.
6.Use the "Mark as Complete" or "Mark as Pending" button to move tasks between the lists.
Code Overview
HTML
  The index.html file contains the structure of the web app, including input fields for task
  title and description, and sections for displaying pending and completed tasks.CSSThe styles.
css
 file provides the styling for the web app, making it visually appealing and user-friendly.
JavaScript
  The scripts.js file contains the logic for adding, deleting, and toggling the completion status of tasks.
  Tasks are stored in the browser's local storage to persist data between sessions.
Functions
  addTask(): Adds a new task with a title, description, and timestamp to the local storage and updates the task list.
  renderTasks(): Renders the pending and completed tasks from the local storage to the web page.
  deleteTask(index): Deletes a task from the local storage based on its index and updates the task list.
  toggleTask(index): Toggles the completion status of a task based on its index and updates the task list.
