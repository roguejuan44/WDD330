const links = [
    {label: "Week 1", url: "week1/index.html"},
    {label: "Week 2", url: "week2/wk2.html"},
    /*{label: "Week 2 Team Activity", url: "week2/team.html"},*/
    {label: "Week 3", url: "week3/wk3.html"},
  /*  {label: "Week 3 Team Activity", url: "week3/wk3.html"},*/
    {label: "Week 4", url: "week4/week4.html"},
    {label: "Week 5", url: "week5/week05.html"},
    {label: "Week 6: To Do Project", url: "week5/ToDo/index.html"},
    {label: "Week 7", url: "week7/week7.html"},
    {label: "Week 8", url: "week8/week8.html"},
    {label: "Week 9", url: "week9/week9.html"},
    {label: "Week 10", url: "week10/week10.html"},
    {label: "Final Project", url: "project/index.html"}
]


var listy = document.createElement('ol');


for (let i = 0; i < links.length; i++) {
    let item = document.createElement('li');
    let a = document.createElement('a');

    var link = document.createTextNode(links[i].label);
    a.appendChild(link);
    a.href = links[i].url;
    item.appendChild(a);

    listy.appendChild(item);

    
}
document.querySelector('div.olist').appendChild(listy);