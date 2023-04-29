import { useState } from "react";
import "./App.css";
import movies from "./assets/movies.json";
import Movies from "./components/Movies";

const App = () => {
  const [submitted, getSubmitted] = useState(false);
  const [choice, setChoice] = useState("");

  const option = movies.map((film, index) => {
    return (
      <button
        onClick={() => {
          getSubmitted(true);
          setChoice(index);
        }}
        key={index}
      >
        {film.name}
      </button>
    );
  });
  return (
    <div className="app">
      <div className="option">{option}</div>
      {submitted ? (
        <Movies choice={movies[choice]} />
      ) : (
        <h1>Merci de choisir un film !</h1>
      )}
    </div>
  );
};

export default App;
