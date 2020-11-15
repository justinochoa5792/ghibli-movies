const bodyEl = document.getElementById("api-body");

function getFilm() {
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((films) => {
        const h2 = document.createElement("h2");
        h2.innerHTML = films.title;

        const h4 = document.createElement("h4");
        h4.innerHTML = films.director;

        const p = document.createElement("p");
        p.innerHTML = films.description;

        bodyEl.appendChild(h2);
        bodyEl.appendChild(h4);
        bodyEl.appendChild(p);
      });
    });
}

getFilm();
