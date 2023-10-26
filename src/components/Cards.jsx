import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Card from "./Card";

export default function Cards({ url, title }) {
  const [movies, setMovies] = useState([]);

  const { response } = useAxios(url);

  useEffect(() => {
    if (response) {
      setMovies(response.results);
    }
  }, [response]);

  return (
    <>
      <h1 className="text-white font-bold text-3xl">{title}</h1>
      <div className="text-white flex gap-4 overflow-x-scroll overflow-y-hidden">
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[200px]">
            <Card movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
}
