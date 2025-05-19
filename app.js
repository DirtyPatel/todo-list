// DOM Elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');
const filters = document.querySelectorAll('.filter');

// State
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

// Initialize
function renderTasks() {
  // Filter tasks based on currentFilter (all/active/completed)
  // Render each task as <li> elements in taskList
  // Include: checkbox, text, delete button
}

// Event Listeners
addButton.addEventListener('click', () => {
  // 1. Get input value
  // 2. Validate (non-empty)
  // 3. Add to tasks array
  // 4. Save to localStorage
  // 5. Re-render
});

taskList.addEventListener('click', (e) => {
  // Handle: 
  // - Checkbox clicks (toggle completion)
  // - Delete button clicks
});

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    // Update currentFilter and re-render
  });
});

// Initial render
renderTasks();