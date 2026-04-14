let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value === "") return;

    tasks.push(input.value);
    input.value = "";

    displayTasks();
}

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button class="delete-btn" onclick="deleteTask(${index})">X</button>
        `;

        list.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
