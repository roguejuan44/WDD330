class Hiking {

    constructor() {
        this.hikes = [];
    };
    
    showHikeList(id) {
        const hikeListElement = document.getElementById(id);
        hikeListElement.innerHTML = "";
        renderHikeList(hikeList, hikeListElement);
    }
    renderHikeList(hikes, parent) {
        hikes.forEach(hike => {
          parent.appendChild(renderOneHike(hike));
        });
      }
}
  function renderHikes(hikes) {
    const ul = document.createElement("ul");
    for (let i = 0; i < hikes.length; i++) {  
        const item = document.createElement("li");
        item.innerHTML = ` <h2>${hike[i].name}</h2>
            <div class="image"><img src="${imgBasePath}${hike[i].imgSrc}" alt="${hike[i].imgAlt}"></div>
            <div>
                    <div>
                        <h3>Distance</h3>
                        <p>${hike[i].distance}</p>
                    </div>
                    <div>
                        <h3>Difficulty</h3>
                        <p>${hike[i].difficulty}</p>
                    </div>
            </div>`;

    ul.appendChild(item);
  }
  return ul;
}