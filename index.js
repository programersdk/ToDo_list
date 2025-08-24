
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentEditIndex = null;

const addBtn = document.getElementById("add");
const updateBtn = document.getElementById("update");
const inputBox = document.getElementById("input");
const inputDiv = document.getElementById("todo-iput");

inputDiv.style.display="none"
showList();
setAddMode();

function disply() {
  inputDiv.style.display = "flex";
  setAddMode();
}

function setAddMode() {
  addBtn.style.display = "block";
  updateBtn.style.display = "none";
  inputBox.value = "";
  currentEditIndex = null;
}

function setUpdateMode(index) {
  addBtn.style.display = "none";
  updateBtn.style.display = "block";
  inputBox.value = todos[index];
  currentEditIndex = index;
}

function addlist() {
  const value = inputBox.value.trim();
  if (value === "") {
    alert("Please enter a task!");
    return;
  }
  todos.push(value);
  saveTodos();
  inputBox.value = "";
  showList();
}

function showList() {
  const show = document.getElementById("show");
  show.innerHTML = "";
  todos.forEach((task, i) => {
    show.innerHTML += `
      <div class="g">
        <div class="gt">
          <li onclick="updateTask(${i})"><input type="checkbox">${task}</li>
        </div>
        <button class="gun" onclick="deleteTask(${i})">Delete</button>
      </div>
    `;
  });
  saveTodos();
}

function updateTask(index) {
  inputDiv.style.display = "flex";
  setUpdateMode(index);
}

function updatelist() {
  if (currentEditIndex === null) return;
  const value = inputBox.value.trim();
  if (value === "") {
    alert("Please enter a task!");
    return;
  }
  todos[currentEditIndex] = value;
  saveTodos();
  setAddMode();
  showList();
}

function deleteTask(index) {
  todos.splice(index, 1);
  saveTodos();
  showList();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}



