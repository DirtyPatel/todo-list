// DOM Elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');
const filters = document.querySelectorAll('.filter');

// State
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

// Helper Functions
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

function renderTasks() { 
   // taskList.innerHTML = ''; // Clear current tasks
}

//Filter tasks based on current filter
const filteredTasks = tasks.filter(task => {
    if (currentFilter === 'active') return !task.completed;
    if (currentFilter === 'completed') return task.completed;
    return true; // Show all if filter is 'all'
  });

  // Render each task
  filteredTasks.forEach(task => {
    const taskElement = document.createElement('li');
    taskElement.className = 'task-item';
    taskElement.innerHTML = `
      <input 
        type="checkbox" 
        ${task.completed ? 'checked' : ''} 
        data-id="${task.id}"
      >
      <span>${task.text}</span>
      <button class="delete-btn" data-id="${task.id}">×</button>
    `;
    taskList.appendChild(taskElement);
  });

// Event Listeners
addButton.addEventListener('click', () => {
  
      // 1. Get input value
  const taskText = taskInput.value.trim();

  // 2. Validate (non-empty)
  if (!taskText) {
    alert("Please enter a task!"); // or display error in UI
    return; // Exit if empty
  }
  // 3. Add to tasks array
  const newTask = {
    id: Date.now(), // Unique timestamp as ID
    text: taskText,
    completed: false // Default not completed
  };
  tasks.push(newTask);

  // 4. Save to localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // 5. Re-render
  renderTasks();
  taskInput.innerHTML = '';
});

taskList.addEventListener('click', (e) => {
    const clickedEl = e.target;
    const taskId = parseInt(clickedEl.dataset.id);
  // Handle: 
  // - Checkbox clicks (toggle completion)
  // - Delete button clicks
  if (clickedEl.matches('input[type="checkbox"]')) {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    if (taskToUpdate) {
      taskToUpdate.completed = clickedEl.checked;
      saveTasks();
      renderTasks();
    }
  }
  // Handle delete button clicks
  if (clickedEl.matches('.delete-btn')) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    renderTasks();
  }
});

filters.forEach(filter => {
    filter.addEventListener('click', () => {
      currentFilter = filter.dataset.filter;
      document.querySelector('.filter.active')?.classList.remove('active');
      filter.classList.add('active');
      renderTasks();
    });
  });


// Helper function
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Initial setup
  document.querySelector('.filter').classList.add('active');
  renderTasks();
  console.log('Filtered tasks:', filteredTasks); // Check if tasks exist
 