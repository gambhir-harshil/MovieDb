import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import PosterCard from "./PosterCard";
import Loader from "./Loader";

export default function Cards({ url, title }) {
  const [movies, setMovies] = useState([]);

  const { response, loading } = useAxios(url);

  useEffect(() => {
    if (response) {
      setMovies(response.results);
    }
  }, [response]);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <div className="flex gap-4 overflow-x-scroll overflow-y-hidden text-white">
            {movies.map((movie) => (
              <div key={movie.id} className="min-w-[200px]">
                <PosterCard movie={movie} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
