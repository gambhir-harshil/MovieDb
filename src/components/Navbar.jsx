import { Settings } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <div
      className={` w-full text-white flex justify-between px-8 py-4 fixed top-0 z-10 ${
        show && "bg-black/70"
      }`}
    >
      <ul className="flex gap-4 font-semibold">
        <Link>Movies</Link>
        <Link>Series</Link>
        <Link>Trending</Link>
        <Link>List</Link>
      </ul>
      <Settings className="text-2xl" />
    </div>
  );
}
