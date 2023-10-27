import { useEffect, useState } from "react";
import requests from "../consts/requests";
import useAxios from "../hooks/useAxios";

import Card from "./PosterCard";

const requestKey = {
  Action: "fetchActionMovies",
  Horror: "fetchHorrorMovies",
  Documentary: "fetchDocumentaries",
  Comedy: "fetchComedyMovies",
};

export default function GenreCards({ genre }) {
  const [movies, setMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const initialDisplayCount = 8;

  const key = requestKey[genre];
  const requestUrl = requests[key];
  const { response } = useAxios(requestUrl);

  useEffect(() => {
    if (response) {
      setMovies(response.results);
      setShowLoadMore(true);
    }
  }, [response]);

  useEffect(() => {
    setDisplayedMovies(movies.slice(0, initialDisplayCount));
  }, [movies, initialDisplayCount]);

  function handleLoadMore() {
    setDisplayedMovies(movies.slice(0, 19));
    setShowLoadMore(false);
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-4 p-4">
        {displayedMovies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
      {showLoadMore && (
        <button
          className="border-red-600 bg-red-600 border-2 font-semibold px-4 py-2 rounded-lg hover:bg-transparent transition-all ease-in-out"
          onClick={handleLoadMore}
        >
          Show more results
        </button>
      )}
    </>
  );
}
