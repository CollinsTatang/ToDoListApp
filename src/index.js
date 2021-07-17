import './style.css';
import RecycleImg from './recycle.svg';
import MoreImg from './more.svg';
import { drag, drop, allowDrop } from './drag_drop.js';
import updateTasks from './status.js';
import { addTask, editTask, clear } from './add_remove.js';

let tasks = null;

/**       Saves and retrieves from local storage       */
window.updateLocalStorage = function updateLocalStorage(retrieve) {
  if (retrieve === true) {
    if (tasks === null) {
      tasks = JSON.parse(window.localStorage.getItem('tasks'));
    }
  } else {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  window.displayTasks();
};

/**       Handler for calling a task from and inline declared listener */
window.callAddTask = function callAddTask() {
  addTask(tasks);
};

/**       Handler for calling a task from and inline declared listener */
window.restart = function restart() {
  tasks = null;
  window.updateLocalStorage(false);
};

/**       Update the state of the tasks            */
window.update = function update(data) {
  if (!data) {
    const response = updateTasks();
    tasks = response;
  } else {
    tasks = data;
  }

  window.updateLocalStorage(false);
};

/**       Display tasks is used to show the Task collection      */
window.displayTasks = function displayTasks() {
  const container = document.getElementById('container');
  const list = document.createElement('ul');
  list.id = 'list';
  const EnterImg = '&#8629';

  if (tasks) {
    tasks.forEach((task, index) => {
      const { description, id } = task;
      const li = document.createElement('li');
      li.id = index;
      li.addEventListener('drop', (EventTarget) => {
        li.classList.remove('dragging');
        drop(EventTarget);
      });

      li.addEventListener('dragover', (EventTarget) => {
        allowDrop(EventTarget);
      });

      const div = document.createElement('div');
      const divId = `div${task.index}`;

      div.classList.add('task');
      div.id = divId;
      div.classList.add('drag-div');
      div.draggable = true;
      div.addEventListener('click', () => editTask(divId, tasks));
      div.data = index;
      div.addEventListener('dragstart', (EventTarget) => {
        div.classList.add('dragging');
        drag(EventTarget);
      });

      const inputCheckbox = document.createElement('input');
      inputCheckbox.addEventListener('click', () => {
        window.update();
      });
      inputCheckbox.type = 'checkbox';
      inputCheckbox.name = task.id;
      inputCheckbox.id = `input-check-${id}`;
      inputCheckbox.checked = task.completed;

      const inputTask = document.createElement('input');
      inputTask.id = `li-description-${id}`;
      inputTask.type = 'text';
      inputTask.classList.add('description');
      inputTask.placeholder = description;
      inputTask.value = description || null;
      inputTask.data = task.index;
      inputTask.addEventListener('change', () => {
        window.update();
      });

      const button = document.createElement('button');
      button.classList.add('edit-btn');
      button.id = `edit-btn-${id}`;
      button.type = 'button';

      const img = document.createElement('img');
      img.src = MoreImg;
      img.alt = 'image';
      img.classList.add('add-btn-img');

      button.appendChild(img);
      div.appendChild(inputCheckbox);
      div.appendChild(inputTask);
      div.appendChild(button);
      li.appendChild(div);
      list.appendChild(li);
    });
  }
  const template = `
  <div class="top">
  <h1 class="title">Today's To Do</h1>
           <button id="refresh-btn" type="button" 
            onclick="window.restart()"
            type="button"> 
            <img class="add-btn-img" src=${RecycleImg} alt="" /> 
            </button>
  </div>       
          <form onsubmit="window.callAddTask()" id="task-form">
            <input
              id="description"
              type="text"
              class="text"
              placeholder="Add to your list ..."
            />
            <button id="add-btn" type="submit" 
            type="button"> 
          ${EnterImg}
            </button>
          </form>       
          `;

  container.innerHTML = template;
  const buttonHtml = document.createElement('button');
  buttonHtml.id = 'clear-btn';
  buttonHtml.addEventListener('click', () => {
    clear(tasks);
  });
  buttonHtml.textContent = 'Clear completed tasks.';
  container.insertAdjacentElement('beforeend', list);
  container.insertAdjacentElement('beforeend', buttonHtml);
};

window.updateLocalStorage(true);
window.displayTasks();
