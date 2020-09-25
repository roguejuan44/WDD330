const links = [
    {label: "Week 1", url: "week1/index.html"},
    {label: "Week 2", url: "week2/wk2.html"}
]


var listy = document.createElement('ol')


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