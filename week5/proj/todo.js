class Task {

    constructor(content, id=0, completed=false) {
        this.content = content;
        this.id = id;
        this.completed = completed;
    }
}


//On load
let food = new Task("eat food");
const toDoList = [food];

let box = document.getElementById("task-list");
for (let i = 0; i < toDoList.length; i++) {
    populate(toDoList[i]);
}
let add = document.querySelector('div.task-list').appendChild();

//Populate Function
function populate(x) {
    let task = document.createElement('div');
    task.setAttribute("class", "task-item")

    let tasktext = document.createElement('p');

    let butt = document.createElement('input');
    butt.setAttribute("class", "checker");
    butt.setAttribute("type", "checkbox");
    tasktext.innerHTML = x.content;
    task.appendChild(tasktext)
    task.appendChild(butt);
    document.querySelector('div.task-list').appendChild(task);

}

//getTask function
function getTask() {
    var newTask = document.getElementById("inputbox").value;
    if (newTask != "") {
        let y = new Task(newTask);
        toDoList.push(y);
        console.log(toDoList);
        populate(y);
    }
}
