
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

const datas = ["tt0078748", "tt3896198", "tt9336300", "tt0058331", "tt0070047", "tt0387564", "tt1392170"]

const movies = []

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
  const moviesList = results.filter(movie => movie !== null)
  console.log(moviesList)
})






