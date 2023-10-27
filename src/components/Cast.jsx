import useAxios from "../hooks/useAxios";
import requests from "../consts/requests";
import { useEffect, useState } from "react";
import CastCard from "./CastCard";

export default function Cast({ movie }) {
  const [cast, setCast] = useState([]);
  const { response } = useAxios(requests.fetchCast(movie.id));

  useEffect(() => {
    if (response) {
      setCast(response.cast.slice(0, 5));
    }
  }, [response]);

  return (
    <>
      {cast.length ? (
        <div className="mt-4 mb-8">
          <h1 className="text-3xl font-bold">Top Cast</h1>
          <div className="flex justify-between mt-8">
            {cast.map((celeb) => (
              <CastCard key={celeb.cast_id} celeb={celeb} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className="text-2xl">No cast found</h1>
      )}
    </>
  );
}
