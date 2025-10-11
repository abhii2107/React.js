export const SeriesCard = (props) => {
  console.log(props)
  const { img_url, name, rating, description, cast, genre, watch_url } = props.data;
  const btn_style = {
    background: `${rating >= 8.5 ? "#7dcea0":"#f7dc6f"}`,
    color: "#fff",
    border: "none",
    borderRadius: "0.3rem",
    padding: "0.6em 1.2em",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "1rem",
    transition: "background 0.2s",
  };
  const ratingClass = rating >= 8.5 ? "super_hit" : "average";
  return (
    <li className="card">
      <div>
        <img
          src={img_url}
          alt={name}
          width="40%"
          height="40%"
        />
      </div>
      <div className="card-content">
        <h2 >Name: {name}</h2>
        <h3 >Rating: <span className={`rating ${ratingClass}`}>{rating}</span></h3>
        <p >Summary: {description}</p>
        <p >Genre: {genre}</p>
        <p >Cast: {cast}</p>
        <a href={watch_url} target="_blank" rel="noreferrer">
          <button style={btn_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
}