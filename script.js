const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const input = document.getElementById('input')


let todos = []


function newTodo() {
  if (!input.value == "") {
    const todo = new Todo(name);
    todos.push(todo);
    input.value = '';
    render()
  }
}

function render() {

  list.innerHTML = ''
  todos.map(renderTodo).forEach(todo => list.appendChild(todo));
  itemCountSpan.textContent = todos.length;
  uncheckedCountSpan.textContent = todos.filter(todo => !todo.checked).length;


}
function renderTodo(todo) {
  const li = document.createElement('li')
  li.classList.add('todo-container');
  li.innerHTML = `
    <input type="checkbox" onChange=toggleTodo(${todo.id}) class="todo-checkbox" ${todo.checked ? 'checked' : ""}/>
    <button class="todo-delete" onClick=removeTodo(${todo.id})>delete</button>
    <span class="todo-text">${todo.text}</span>
  `
  return li
}
function removeTodo(id) {

  todos = todos.filter(todo => todo.id !== id)
  
for(let i=0; i<todos.length;i++){
  alert('yes')
  if(todos[i].id!==i){
    todos[i].id=i;
  }
}

 // todos = todos.splice(todo.id, 1);

  return render()
}
function toggleTodo(id) {
  todos = todos.map(todo => {
    if (todo.id !== id) return todo
    return {
      id: todo.id,
      text: todo.text,
      checked: !todo.checked,
    }
  })

  render();
}


class Todo {
  constructor() {
    this.id = todos.length;
    this.text = this.getText();
    this.checked = false;
  }

  getText() {
    return input.value

  }


}