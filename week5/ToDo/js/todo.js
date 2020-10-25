class Task {
    constructor(content, id=0, completed=false, name = "") {
        this.content = content;
        this.id = id;
        this.completed = completed;
        this.name = name;
        this.display = true;
    }
}

//Populate the field with tasks
function populate(x) {
    if (x.display == true) {
        //create a div for the individual task and set attributes
        let task = document.createElement('div');
        task.setAttribute("id", x.id)
        console.log(x.id);
        console.log(toDoList);
        //create p to store text
        let tasktext = document.createElement('p');

        //create a button and set its attributes
        let butt = document.createElement('input');
        butt.setAttribute("class", "checker");
        butt.setAttribute("type", "checkbox");
        butt.setAttribute("onclick", "strikethrough(" + x.id + ")");
        
        //create delete button
        let delbutt = document.createElement("p");
        delbutt.setAttribute("class", "trash");
        delbutt.setAttribute("onclick", "trashTask(" + x.id + ")");
        delbutt.textContent = "X";

        //set text of item on screen
        tasktext.innerHTML = x.content;
        //append items to div
        task.appendChild(tasktext)
        task.appendChild(butt);
        task.appendChild(delbutt);
        
        //if task completed, check box automatically
        if (x.completed == true) {
            butt.checked = true;
            tasktext.setAttribute("style", "text-decoration: line-through;");
        }

        //append item to screen
        document.querySelector('section.task-list').appendChild(task);
        }
}

//Take input and create new task
function getTask() {
    var newTask = document.getElementById("inputbox").value;
    if (newTask != "") {
        let y = new Task(newTask);
        y.name = "task-item" + toDoList.length;
        y.id = toDoList.length;
        toDoList.push(y);
        populate(y);
    }
}

//Make task completed or not
function strikethrough(x) {
    let doc = document.getElementById(x);
    if (toDoList[x].completed == false) {
        doc.childNodes[0].setAttribute("style", "text-decoration: line-through;"); 
        toDoList[x].completed = true;
    }
    else {
        doc.childNodes[0].setAttribute("style", "text-decoration: none;"); 
        toDoList[x].completed = false;
    }
    updateCounter();    
}

//Show completed
function showCompleted() {
    removeAllChildNodes(box);
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].completed == true) {
            populate(toDoList[i]);
        }
}
}
//Show active
function showActive() {
    removeAllChildNodes(box);
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].completed == false) {
            populate(toDoList[i]);
        }
    }
}
//Show all
function showAll() {
    removeAllChildNodes(box);
    for (let i = 0; i < toDoList.length; i++) {
        populate(toDoList[i]);
        }
}

//clear out list box
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function updateCounter(){
    let counter = 0;
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].completed == false) {
            counter++;
        }
        let left = document.getElementById("remaining");
        left.innerHTML = counter +" tasks left";
    }
}
//remove task from list
function trashTask(x){
    removeAllChildNodes(box);
        toDoList[x].completed = false;
        toDoList[x].display = false;
        for (let i = 0; i < toDoList.length; i++) {
            populate(toDoList[i]);
        }
}


//On load
let box = document.querySelector('section.task-list');

let food = new Task("eat food");
const toDoList = [food];

for (let i = 0; i < toDoList.length; i++) {
    populate(toDoList[i]);
}
updateCounter();
