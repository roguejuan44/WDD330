

function getJSON() {
  let url = "realestate.json";
  
  fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => {
    // Do something for an error here
    console.log("Error Reading data " + err);
  });

}


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
  

