const Movies = (props) => {
  const { choice } = props;

  const bloc = choice.actors.map((actor) => {
    return (
      <div
        className="blocchoice"
        key={actor.id}
        style={{ backgroundImage: choice.background }}
      >
        <p>{actor.name}</p>
        <img src={actor.picture} />
      </div>
    );
  });
  return (
    <div className="bloc">
      <h2>{choice.name}</h2>
      {bloc}
    </div>
  );
};

export default Movies;
