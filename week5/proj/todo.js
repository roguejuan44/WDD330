const tasks = ["eat food", "workout"];

let box = document.getElementById("task-list");
for (let i = 0; i < tasks.length; i++) {
    populate(tasks[i]);
}

function populate(x) {
    let task = document.createElement('p');
    task.innerHTML = x;
    document.querySelector('div.task-list').appendChild(task);
}


function getTask() {
    var newTask = document.getElementById("inputbox").value;
    tasks.push(newTask);
    console.log(tasks);
    populate(newTask);
}

