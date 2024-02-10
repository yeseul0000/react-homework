import { useState, useEffect } from "react";
import "./App.css";
import "./main.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((response) => response.json())
      .then((data) => {
        const fetchedMovies = data.data.movies;
        console.log(fetchedMovies);
        setMovies(fetchedMovies);
      })
      .catch((error) => console.log(error));
  }, []);

  const MovieSelect = () => (
    <select name="selectedMovie">
      <option value="xx">Select a movie</option>
      {movies.map((movie) => (
        <option key={movie.id}>{movie.title}</option>
      ))}
    </select>
  );

  const Stars = () => (
    <select name="selectedStars">
      <option value="xx">별점 등록</option>
      <option value="⭐️">⭐️</option>
      <option value="⭐️⭐️">⭐️⭐️</option>
      <option value="⭐️⭐️⭐️">⭐️⭐️⭐️</option>
      <option value="⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️</option>
      <option value="⭐️⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️⭐️</option>
    </select>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const selectedMovie = formData.get("selectedMovie");
    const selectedStars = formData.get("selectedStars");
    const comment = formData.get("comment");

    if (selectedMovie === "xx" || selectedStars === "xx") return;

    const selectedMovieObject = movies.find(
      (movie) => movie.title === selectedMovie
    );

    const imgUrl = selectedMovieObject
      ? selectedMovieObject.medium_cover_image
      : "";

    const form = document.querySelector(".form");
    const newElementsHTML = `
    <section class="flex justify-center flex-col">
     <h2 class="text-3xl">${selectedMovie}</h2>
      <img class="size-1/5 mx-auto" src="${imgUrl}" alt="${selectedMovie} Poster">
      <p class="text-2xl">${selectedStars}</p>
      <p class="text-1xl">${comment}</p>
      <br class="text-white"/>
  </section>

  `;

    form.insertAdjacentHTML("beforebegin", newElementsHTML);
  };

  return (
    <div>
      <h1 className="text-4xl	text-slate-300 pb-5">영화 평점 매기기</h1>
      <form className="form flex space-x-2 justify-center" onSubmit={onSubmit}>
        <MovieSelect />
        <Stars />
        <input name="comment"></input>
        <button className="bg-slate-50">전송</button>
      </form>
    </div>
  );
}

export default App;
