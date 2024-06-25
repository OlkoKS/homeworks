"use strict"

const form = document.querySelector('.js--form');
const todoList = document.querySelector(('.js--todos-wrapper'));
const LOCAL_STORAGE_KEY = 'todos';

createTodoList();

function createTodoList() {
    let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (todos) {
        todos.forEach(createTodoElement);
    }
}

function createTodoElement(data) {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'todo-item');
    listItem.setAttribute('id', data.id);
    const checkboxElement = document.createElement('input');
    checkboxElement.setAttribute('type', 'checkbox');
    const spanElement = document.createElement('span');
    spanElement.setAttribute('class', 'todo-item__description');
    spanElement.textContent = data.text;
    const buttonElement = document.createElement('button');
    buttonElement.setAttribute('class', 'todo-item__delete');
    buttonElement.textContent = 'Видалити';

    if (data.isDone === true) {
        listItem.classList.add('todo-item--checked');
        checkboxElement.setAttribute('checked', 'true');
    }

    listItem.appendChild(checkboxElement);
    listItem.appendChild(spanElement);
    listItem.appendChild(buttonElement);
    todoList.insertAdjacentElement('beforeend', listItem);
}

function createId() {
    return Math.floor(Math.random() * 100);
}

function addTodo(event) {
    event.preventDefault();

    let newTodoData = {
        id: `${createId()}`, text: event.target.value.value, isDone: false
    }

    createTodoElement(newTodoData);
    let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos ? [...todos, newTodoData] : [newTodoData]));
    form.reset();
}

function setChecking(event) {
    if (event.target.tagName === 'INPUT') {
        let todoItem = event.target.parentElement;
        let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

        todos.map(item => {
            if (item.id === todoItem.id) {
                item.isDone = !item.isDone;
                todoItem.classList.toggle('todo-item--checked');
            }
        })
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }
}

function deleteTodo(event) {
    if (event.target.tagName === 'BUTTON') {
        let todoId = event.target.parentElement.id;
        let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

        todos = todos.filter(item => item.id !== todoId);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
        todoList.innerHTML = '';
        createTodoList();
    }
}

form.addEventListener('submit', addTodo);
todoList.addEventListener('click', setChecking);
todoList.addEventListener('click', deleteTodo);