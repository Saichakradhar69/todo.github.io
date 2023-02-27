const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const list = document.querySelector('#task-list');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = input.value.trim();
  if (task) {
    addTask(task);
    input.value = '';
  }
});

function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
  });
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.innerHTML = '&times;';
  deleteButton.addEventListener('click', () => {
    li.remove();
  });
  li.appendChild(checkbox);
  li.appendChild(deleteButton);
  list.appendChild(li);
}
