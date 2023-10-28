import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();

  function handleLogin() {
    login({ name, email, password });
    navigate("/");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 bg-background">
      <h1 className="text-3xl font-semibold text-white">Begin your journey!</h1>
      <div className="h-[50%] min bg-primary min-w-[80%] md:min-w-[50%] rounded-tl-2xl rounded-br-2xl drop-shadow-lg flex flex-col justify-center items-center gap-8">
        <form
          onSubmit={handleLogin}
          className="flex flex-col w-[40%] gap-4 text-white"
        >
          <input
            className="p-2 outline-none bg-input rounded-l-xl"
            type="text"
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="p-2 outline-none bg-input rounded-r-xl"
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-2 outline-none bg-input rounded-l-xl"
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="border-2 border-background rounded-tl-xl rounded-br-xl p-[2px] hover:border-gray-500 transition-all ease-in-out"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
