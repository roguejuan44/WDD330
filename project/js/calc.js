jsonData = []


function calc() {
  
    var price = parseFloat(document.getElementById("price").value);
    var down = parseFloat(document.getElementById("down").value);
    var closing = parseFloat(document.getElementById("closing").value);
    var tax_ins = parseFloat(document.getElementById("tax_ins").value);
    var reno = parseFloat(document.getElementById("reno").value);
    var rental = parseFloat(document.getElementById("rental").value);
    var other = parseFloat(document.getElementById("other").value);
            
           
    var grossIncome = rental * 12;
    var netOI = grossIncome - tax_ins - other;
    let capRate = (netOI / price) * 100;
    capRate = capRate.toFixed(2);
    var upFront = down + closing + reno;
    var returnOI = (netOI / upFront)*100;
              
    let text = "<h2>Results: </h2>"
    text += `<p>Net operating income: $${netOI}</p>`;
    text += `<p>Capitalization rate: ${capRate}%</p>`;
    text += `<p>Total up front cost (including reno): $${upFront}`;
    text += `<p>Annual return on investment: ${returnOI.toFixed(2)}%</p>`;
    document.getElementById("col2").innerHTML =  text;
            
  }
  

//Retrieve the data
function getSearchResults() {
    var xhttp = new XMLHttpRequest();
    let url = "js/realestate.json";
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let obj = this.responseText;
            obj = JSON.parse(obj);
            let houses = obj["houses"];
            displayBookmarks(houses);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

//generate a div for each property
function displayBookmarks(houses) {
  console.log(houses);
  let resultsBox = document.getElementById("bookmark-row");
  for (let i = 0; i < houses.length; i ++) {
      jsonData.push(houses[i]);
      if (localStorage.getItem("bookmark"+i)) {
        document.getElementById("ph2").innerHTML = "";
        let item = document.createElement("div");
        item.setAttribute("class", "result item" + i);
        item.setAttribute("onclick", "populateData(jsonData, " + i + ")")
        
        let address = document.createTextNode(houses[i].address.number + " " + houses[i].address.street +", " + houses[i].address.city + ", " + houses[i].address.state + " " + houses[i].address.zip);
        let img = document.createElement("img"); img.setAttribute("src", houses[i].image);
        img.setAttribute("alt", "Thumbnail of a house");
        item.appendChild(address);
        item.appendChild(img);  
        resultsBox.appendChild(item);
      }
  }
}

function populateData(array, i) {
    let house = array[i];
    document.getElementById("price").value = house.list_price;
    document.getElementById("closing").value = house.list_price/50;
    document.getElementById("tax_ins").value = house.taxes;


}

getSearchResults();