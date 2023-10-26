import useAxios from "../hooks/useAxios";
import requests from "../consts/requests";
import { useEffect, useState } from "react";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { useList } from "../context/ListContext";

export default function Banner() {
  const { list, handleAddToList, handleRemoveFromList, isFavorite } = useList();
  const [movie, setMovie] = useState([]);

  const { response } = useAxios(requests.fetchTrending);

  useEffect(() => {
    if (response) {
      const randomMovieIndex = response
        ? Math.floor(Math.random() * response.results.length - 1)
        : null;
      const randomMovie = response.results[randomMovieIndex];
      setMovie(randomMovie);
    }
  }, [response, list]);

  const favorite = isFavorite(movie.id);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function toggleFavorite() {
    if (favorite) {
      handleRemoveFromList(movie);
    } else {
      handleAddToList(movie);
    }
  }

  return (
    <div
      className="bg-cover relative bg-center h-[600px]"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
        <div className="absolute bottom-[8rem] left-12 text-white">
          <h1 className="text-3xl max-w-[24rem] font-bold mb-2">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <p className="text-sm max-w-md mb-4">
            {truncate(movie?.overview, 150)}
          </p>
          <div className="flex gap-4 items-center">
            <button className="border-red-600 border-2 px-4 py-2 rounded-3xl font-bold shadow-lg hover:bg-red-600 transition-all ease-in">
              Watch now
            </button>
            {favorite ? (
              <Favorite
                className="text-red-600 cursor-pointer"
                onClick={toggleFavorite}
              />
            ) : (
              <FavoriteBorderOutlined
                className="cursor-pointer hover:text-red-600"
                onClick={toggleFavorite}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
