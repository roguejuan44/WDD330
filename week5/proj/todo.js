const tasks = [];

function populate() {
    for (let i = 0; i < tasks.length; i++) {
        var line = document.createElement('input');
        line.setAttribute("type", "checkbox")
        line.textContent = tasks[i];
        console.log(line);
        document.querySelector('div.todo').appendChild(line);
    }
}

function getTask() {
    var newTask = document.getElementById("inputbox").value;
    console.log(newTask);
    if (newTask != null) {
        tasks.push(newTask);
        populate();

    }
}

populate()