import React from "react";

const movies = [
  {
    title: "Blade runner",
    genre: "sci-fi",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72"
  },
  {
    title: "Akira",
    genre: "anime",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72"
  },
  {
    title: "Tolo-Tolo",
    genre: "comedy",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72"
  },
  {
    title: "Gattaca",
    genre: "sci-fi",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72"
  }
];

const MovieList = () => (
  <ul>
    {movies.map(item => (
      <li key={item.title} image={item.image} genre={item.genre}>
        {item.movie}
      </li>
    ))}
  </ul>
);

export default MovieList;
