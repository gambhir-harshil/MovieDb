import { useState } from "react";
import Pill from "./Pill";
import GenreCards from "./GenreCards";

const genres = ["Action", "Horror", "Documentary", "Comedy"];

export default function GenreSelector({
  list,
  handleAddToList,
  handleRemoveFromList,
}) {
  const [activeGenre, setActiveGenre] = useState("Action");

  function handleClick(genre) {
    setActiveGenre(genre);
  }

  return (
    <div className="flex flex-col items-center text-white mt-4 gap-4">
      <h1 className="text-2xl font-bold">Find your favorite genre</h1>
      <div className="flex gap-4">
        {genres.map((genre, id) => (
          <Pill
            key={id}
            genre={genre}
            onClick={() => handleClick(genre)}
            active={activeGenre === genre}
          />
        ))}
      </div>
      <GenreCards genre={activeGenre} />
    </div>
  );
}
