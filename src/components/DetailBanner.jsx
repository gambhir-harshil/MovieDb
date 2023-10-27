import {
  Add,
  HorizontalRule,
  KeyboardDoubleArrowDown,
  PlayArrow,
} from "@mui/icons-material";
import { useList } from "../context/ListContext";
import GenrePill from "./GenrePill";

export default function DetailBanner({ movie, handleClick }) {
  const { handleAddToList, handleRemoveFromList, isFavorite } = useList();
  const favorite = isFavorite(movie.id);

  function toggleFavorite() {
    if (favorite) {
      handleRemoveFromList(movie);
    } else {
      handleAddToList(movie);
    }
  }

  return (
    <div
      className="relative w-full h-[900px] bg-center bg-cover"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
        <div className="absolute -mt-24 text-white top-1/2 left-24">
          <h1 className="text-6xl max-w-[48rem] font-bold mb-4">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <GenrePill id={movie.genre_ids} />
          <p className="max-w-2xl mt-4">{movie.overview}</p>
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-4">
              <button
                className="w-12 h-12 bg-red-600 rounded-full drop-shadow-lg"
                onClick={handleClick}
              >
                <PlayArrow fontSize="large" />
              </button>
              <span className="text-xl font-semibold">Watch trailer</span>
            </div>
            <div className="flex items-center gap-4">
              {!favorite ? (
                <>
                  <button
                    className="w-12 h-12 text-center text-black transition-all ease-in-out bg-white rounded-full drop-shadow-lg"
                    onClick={toggleFavorite}
                  >
                    <Add fontSize="large" />
                  </button>
                  <span className="text-xl font-semibold">Add to List</span>
                </>
              ) : (
                <>
                  <button
                    className="w-12 h-12 text-center text-white transition-all ease-in-out bg-gray-600 rounded-full drop-shadow-lg"
                    onClick={toggleFavorite}
                  >
                    <HorizontalRule fontSize="large" />
                  </button>
                  <span className="text-xl font-semibold">
                    Remove From List
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <button className="absolute left-1/2 bottom-10">
          <KeyboardDoubleArrowDown fontSize="large" />
        </button>
      </div>
    </div>
  );
}
