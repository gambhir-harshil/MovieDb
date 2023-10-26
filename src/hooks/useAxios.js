import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export default function (request) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get(request);
        setResponse(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [request]);

  return { response, error, loading };
}
