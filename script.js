// Classe para representar uma tarefa
class Task {
    constructor(description) {
      this.description = description;
      this.completed = false;
    }
  
    toggleCompletion() {
      this.completed = !this.completed;
    }
  }
  
  // Classe para gerenciar a lista de tarefas e a interface do usuário
  class TaskManager {
    constructor() {
      this.tasks = [];
      this.taskListElement = document.getElementById('taskList');
      this.taskInput = document.getElementById('taskInput');
      this.addTaskButton = document.getElementById('addTaskButton');
      
      // Adicionar evento ao botão
      this.addTaskButton.addEventListener('click', () => this.addTask());
    }
  
    addTask() {
      const taskDescription = this.taskInput.value;
      if (taskDescription) {
        const newTask = new Task(taskDescription);
        this.tasks.push(newTask);
        this.taskInput.value = '';
        this.renderTasks();
      }
    }
  
    toggleTaskCompletion(index) {
      this.tasks[index].toggleCompletion();
      this.renderTasks();
    }
  
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.renderTasks();
    }
  
    renderTasks() {
      this.taskListElement.innerHTML = '';
      this.tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
  
        const taskDescription = document.createElement('span');
        taskDescription.textContent = task.description;
        taskDescription.style.textDecoration = task.completed ? 'line-through' : 'none';
        taskDescription.addEventListener('click', () => this.toggleTaskCompletion(index));
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => this.deleteTask(index));
  
        taskElement.appendChild(taskDescription);
        taskElement.appendChild(deleteButton);
  
        this.taskListElement.appendChild(taskElement);
      });
    }
  }
  
  // Inicializar o gerenciador de tarefas
  document.addEventListener('DOMContentLoaded', () => {
    const taskManager = new TaskManager();
  });
  