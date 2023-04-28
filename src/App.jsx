import { useState } from "react";
import "./App.css";
import movies from "./assets/movies.json";
import Movies from "./components/Movies";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selection, setSelection] = useState("");

  const options = movies.map((film) => {
    return (
      <button
        type="submit"
        onClick={() => {
          setSubmitted(true);
          setSelection(film.name);
        }}
        key={film.id}
      >
        {film.name}
      </button>
    );
  });

  const movieChoosen = () => {
    event.preventDefault();
    return (
      <>
        <Movies movie={selection} />
      </>
    );
  };

  return (
    <div className="app">
      <form onSubmit={movieChoosen}>{options}</form>
      {submitted || <div>Merci de choisir un film</div>}
    </div>
  );
};

export default App;
