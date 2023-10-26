import { ListProvider } from "./context/ListContext";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  return (
    // <div className="bg-background h-screen flex flex-col justify-center items-center gap-8">
    //   <h1 className="text-white text-3xl font-semibold">Begin your journey!</h1>
    //   <Login />
    // </div>
    <div className="bg-black">
      <ListProvider>
        <Home />
      </ListProvider>
    </div>
  );
}
