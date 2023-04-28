import movies from "../assets/movies.json";

const Movies = (props) => {
  for (let i = 0; i < movies.length; i++) {
    if (props.movie === movies[i].name) {
      const choix = movies[i].name;
    }
  }

  return (
    <section>
      <h1>{choix.name}</h1>
      <div>
        {choix.actors.map((image) => {
          return (
            <div key={image.name}>
              <p>{image.name}</p>
              <img src={image.picture} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
