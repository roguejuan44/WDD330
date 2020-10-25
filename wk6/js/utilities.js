class Task {
    constructor(content) {
        this.content = content;
        this.id = 0;
        this.completed = false
        this.name = "";
        this.display = true;
    }
}

//Populate the field with tasks
function populate(x) {
    if (x.display == true) {
        //create a div for the individual task and set attributes
        let task = document.createElement('div');
        task.setAttribute("class", "object task-item" + toDoList.length)
        //create p to store text
        let tasktext = document.createElement('p');

        //create a button and set its attributes
        let butt = document.createElement('input');
        butt.setAttribute("class", "checker");
        butt.setAttribute("type", "checkbox");
        butt.setAttribute("onclick", "strikethrough(" + toDoList.length + ")");
        
        //create delete button
        let delbutt = document.createElement("p");
        delbutt.setAttribute("class", "trash");
        delbutt.setAttribute("onclick", "trashTask(" + toDoList.length + ")");
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
        document.querySelector('div.listbox').appendChild(task);
        }
}

let food = new Task("eat food");
const toDoList = [food];
for (let i = 0; i < toDoList.length; i++) {
    populate(toDoList[i]);
}