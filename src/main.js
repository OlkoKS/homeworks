'use strict'

const LOCAL_STORAGE_KEY = 'todos';
const $todoList = $('.js--todos-wrapper');
const $form = $('.js--form');
const $exampleModal = $('#exampleModal');

$(document).ready(createTodoList);

function createTodoList() {
    const todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (todos) {
        todos.forEach(createTodoElement);
    }

    $form.on('submit', addTodo);
    $exampleModal.on('show.bs.modal', openModal);
}

function createTodoElement(data) {
    let $listItem = $('<li class="todo-item"></li>').attr('id', `${data.id}`).appendTo($todoList);

    $('<input type="checkbox">').on({click: setChecking}).appendTo($listItem);
    $('<span class="todo-item__description"></span>')
        .text(data.text)
        .attr('data-bs-toggle', 'modal')
        .attr('data-bs-target', '#exampleModal')
        .attr('data-bs-whatever', `${data.text}`)
        .appendTo($listItem);
    $('<button class="todo-item__delete">Delete</button>').on({click: deleteTodo}).appendTo($listItem);

    if (data.isDone === true) {
        $listItem.addClass('todo-item--checked');
        $listItem.find('input').attr('checked', 'true');
    }
}

function addTodo(event) {
    event.preventDefault();
    const $input = $form.find('input');

    let newTodoData = {
        id: `${createId()}`, text: $input.val(), isDone: false
    }

    createTodoElement(newTodoData);
    const todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos ? [...todos, newTodoData] : [newTodoData]));
    $input.val('');
}

function createId() {
    return Math.floor(Math.random() * 1000);
}

function setChecking(event) {
    let $todoItem = $(event.target).closest('li');
    const todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    todos.map(item => {
        if (item.id === $todoItem[0].id) {
            item.isDone = !item.isDone;
            $todoItem.toggleClass('todo-item--checked');
        }
    })
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    let todoId = $(event.target).closest('li')[0].id;
    let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    todos = todos.filter(item => item.id !== todoId);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));

    $todoList.empty();
    createTodoList();
}

function openModal(event) {
    let $todoItem = $(event.relatedTarget);

    let todoText = $todoItem.attr('data-bs-whatever');
    let isDone = $todoItem.parent().hasClass('todo-item--checked');

    $('.modal-title').text(`${todoText}`);
    $('.modal-body-text').text(isDone ? "Is Done" : "Need To Do");
}
