import { useList } from "../context/ListContext";
import Card from "./Card";

export default function MyList() {
  const { list } = useList();
  return (
    <>
      <h1 className="text-white font-bold text-3xl">My List</h1>
      <div className="text-white flex gap-4 overflow-x-scroll overflow-y-hidden">
        {list.map((movie) => (
          <div key={movie.id} className="min-w-[200px]">
            <Card movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
}
