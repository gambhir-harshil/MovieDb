import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useList } from "../context/ListContext";

export default function Card({ movie }) {
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
    <div className="h-[280px] max-w-[200px] bg-cover cursor-pointer relative rounded-md overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        alt={movie.title}
        className="hover:scale-105 transition-all ease-in"
      />
      <div className="w-full bg-black/30 text-white absolute bottom-0 py-2 px-4 text-sm font-bold flex justify-between items-center">
        {movie.title || movie.name || movie.original_name}
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
  );
}
