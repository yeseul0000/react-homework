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
    <div>
      <img src=${imgUrl} >
      <h2>${selectedMovie}</h2>
      <p>${selectedStars}</p>
      <p>${comment}</p>
    </div>
  `;

    form.insertAdjacentHTML("beforebegin", newElementsHTML);
  };

  return (
    <div className="">
      <h1>영화 평점 매기기</h1>
      <form className="form" onSubmit={onSubmit}>
        <MovieSelect />
        <Stars />
        <input name="comment"></input>
        <button>전송</button>
      </form>
    </div>
  );
}

export default App;
