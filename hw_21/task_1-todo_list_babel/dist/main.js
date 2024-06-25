'use strict';

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var LOCAL_STORAGE_KEY = 'todos';
var $todoList = $('.js--todos-wrapper');
var $form = $('.js--form');
var $exampleModal = $('#exampleModal');
$(document).ready(createTodoList);
function createTodoList() {
  var todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (todos) {
    todos.forEach(createTodoElement);
  }
  $form.on('submit', addTodo);
  $exampleModal.on('show.bs.modal', openModal);
}
function createTodoElement(data) {
  var $listItem = $('<li class="todo-item"></li>').attr('id', "".concat(data.id)).appendTo($todoList);
  $('<input type="checkbox">').on({
    click: setChecking
  }).appendTo($listItem);
  $('<span class="todo-item__description"></span>').text(data.text).attr('data-bs-toggle', 'modal').attr('data-bs-target', '#exampleModal').attr('data-bs-whatever', "".concat(data.text)).appendTo($listItem);
  $('<button class="todo-item__delete">Delete</button>').on({
    click: deleteTodo
  }).appendTo($listItem);
  if (data.isDone === true) {
    $listItem.addClass('todo-item--checked');
    $listItem.find('input').attr('checked', 'true');
  }
}
function addTodo(event) {
  event.preventDefault();
  var $input = $form.find('input');
  var newTodoData = {
    id: "".concat(createId()),
    text: $input.val(),
    isDone: false
  };
  createTodoElement(newTodoData);
  var todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos ? [].concat(_toConsumableArray(todos), [newTodoData]) : [newTodoData]));
  $input.val('');
}
function createId() {
  return Math.floor(Math.random() * 1000);
}
function setChecking(event) {
  var $todoItem = $(event.target).closest('li');
  var todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  todos.map(function (item) {
    if (item.id === $todoItem[0].id) {
      item.isDone = !item.isDone;
      $todoItem.toggleClass('todo-item--checked');
    }
  });
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}
function deleteTodo(event) {
  var todoId = $(event.target).closest('li')[0].id;
  var todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  todos = todos.filter(function (item) {
    return item.id !== todoId;
  });
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  $todoList.empty();
  createTodoList();
}
function openModal(event) {
  var $todoItem = $(event.relatedTarget);
  var todoText = $todoItem.attr('data-bs-whatever');
  var isDone = $todoItem.parent().hasClass('todo-item--checked');
  $('.modal-title').text("".concat(todoText));
  $('.modal-body-text').text(isDone ? "Is Done" : "Need To Do");
}