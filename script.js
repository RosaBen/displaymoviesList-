
// const options = {
//   root: document.querySelector("#scrollArea"),
//   rootMargin: "0px",
//   threshold: 1.0,
// };

// const observer = new IntersectionObserver(callback, options);
// const observer = new IntersectionObserver((entries) => {
//   for (const entry of entries) {
//     if (entry.isIntersecting) {
//       entry.target.animate([
//         { transform: "translateY(-50px)", opacity: 0 },
//         { transform: "translateY(0px)", opacity: 1 }
//       ], {
//         duration: 500
//       })
//     }

//   }
// }, options)

// observer.observe(document.getElementById("listItem"))

const datas = ["tt0078748", "tt3896198", "tt0058331", "tt0070047", "tt0387564", "tt1392170", "tt0848228"]

const movies = []

function createHomeCard() {
  const sectionList = document.getElementById("section-list");
  for (const movie of moviesList) {
    const movieCard = document.createElement("div");
    movieCard.classList.add("card");
    sectionList.appendChild(movieCard);
    const imageUrl = document.createElement("img");
    movieCard.appendChild(imageUrl);
    imageUrl.src = movie.image;
    imageUrl.alt = movie.detail.Title;
    const description = document.createElement("div");
    description.classList.add("description");
    movieCard.appendChild(description);
    const movieTitle = document.createElement("h4");
    movieTitle.textContent = movie.detail.Title;
    description.appendChild(movieTitle);
    const releaseYear = document.createElement("p");
    releaseYear.innerHTML = `Year released: ${movie.detail.Year}`;
    description.appendChild(releaseYear);
    const btnCard = document.createElement("button");
    btnCard.type = "button";
    btnCard.innerHTML = "Read More";
    btnCard.classList.add("btn");
    description.appendChild(btnCard);
  }
}

Promise.all(
  datas.map(movieId =>
    fetch(`https://www.omdbapi.com/?apikey=1bd6247d&i=${movieId}`)
      .then(response => response.json())
      .then(details => ({
        detail: details,
        image: `https://img.omdbapi.com/?apikey=1bd6247d&i=${movieId}`
      }))
      .catch(error => {
        console.error('Response error:', error.message);
        return null;
      })
  )
).then(results => {
  const moviesList = results.filter(movie => movie !== null);
  window.moviesList = moviesList;
  createHomeCard();
})






