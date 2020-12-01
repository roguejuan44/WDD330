jsonData = []
//Retrieve the data
function getSearchResults() {
    var xhttp = new XMLHttpRequest();
    let url = "js/realestate.json";
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let obj = this.responseText;
            obj = JSON.parse(obj);
            let houses = obj["houses"];
            displaySearchResults(houses);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
  

//generate a div for each property
function displaySearchResults(houses) {
    console.log(houses);
    let resultsBox = document.getElementById("resultsBox");
    for (let i = 0; i < houses.length; i ++) {
        jsonData.push(houses[i]);
        let item = document.createElement("div");
        item.setAttribute("class", "result item" + i);
        item.setAttribute("onclick", "displaySpecifics(jsonData, " + i + ")")
        
        let address = document.createTextNode(houses[i].address.number + " " + houses[i].address.street +", " + houses[i].address.city + ", " + houses[i].address.state + " " + houses[i].address.zip);
        let img = document.createElement("img"); img.setAttribute("src", houses[i].image);
        img.setAttribute("alt", "Thumbnail of a house");
        item.appendChild(address);
        item.appendChild(img);  
        resultsBox.appendChild(item);
    }
}

//show when each property is clicked
function displaySpecifics(houses, i) {
    let house = houses[i];
    let dataDisplay = document.getElementById("dataDisplay");
    dataDisplay.innerHTML = "";

    //display house address and image
    let address = document.createElement("h2");
    address.innerHTML = (house.address.number + " " + house.address.street +", " + house.address.city + ", " + house.address.state + " " + house.address.zip);
    let price = document.createElement("h3"); price.innerHTML = "$" + house.list_price;
    let img = document.createElement("img"); img.setAttribute("src", "https://roguejuan44.github.io/WDD330/project/images/house"+ i +".jpg");
    img.setAttribute("alt", "Image of a house");
    dataDisplay.appendChild(address);
    dataDisplay.appendChild(img);
    dataDisplay.appendChild(price);

    //display house configuration
    let ul = document.createElement("ul");
    let li0 = document.createElement("li"); li0.innerHTML = "Bedrooms: " + house.configuration.bed;
    let li1 = document.createElement("li"); li1.innerHTML = "Bath: " + house.configuration.bath;
    let li2 = document.createElement("li"); li2.innerHTML = "Square Footage: " + house.configuration.sqft;
    let li3 = document.createElement("li"); li3.innerHTML = "Acerage: " + house.configuration.acreage;
    let li4 = document.createElement("li"); li4.innerHTML = "Floors: " + house.configuration.floors;
    let li5 = document.createElement("li"); li5.innerHTML = "Property Taxes: $" + house.taxes;
    let desc = document.createElement('p'); desc.innerHTML = house.description;
    


    dataDisplay.appendChild(desc);
    ul.appendChild(li0); ul.appendChild(li1); ul.appendChild(li2); ul.appendChild(li3); ul.appendChild(li4); ul.appendChild(li5);

    dataDisplay.appendChild(ul);
}

function hide() {
    let listy = document.getElementById("resultsBox");
    listy.classList.toggle("hide");
}