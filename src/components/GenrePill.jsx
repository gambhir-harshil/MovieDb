import { Link } from "react-router-dom";
import { getGenreNames } from "../consts/genre";
export default function GenrePill({ id }) {
  return (
    <div className="flex gap-2">
      {getGenreNames(id).map((genre, id) => (
        <Link
          to={`/movies/genre/${genre}`}
          key={id}
          className="p-2 text-sm font-semibold text-gray-200 border-2 border-red-600 rounded-full bg-red-600/60"
        >
          {genre}
        </Link>
      ))}
    </div>
  );
}
