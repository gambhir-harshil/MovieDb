export default function Login() {
  return (
    <div className="h-[50%] min bg-primary min-w-[80%] md:min-w-[50%] rounded-tl-2xl rounded-br-2xl drop-shadow-lg flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col w-[40%] gap-4 text-white">
        <input
          className="p-2 bg-input rounded-l-xl outline-none"
          type="text"
          id="name"
          placeholder="Name"
        />
        <input
          className="p-2 bg-input rounded-r-xl outline-none"
          type="email"
          id="email"
          placeholder="Email"
        />
        <input
          className="p-2 bg-input rounded-l-xl outline-none"
          type="password"
          id="password"
          placeholder="Password"
        />
        <button className="border-2 border-background rounded-tl-xl rounded-br-xl p-[2px] hover:border-gray-500 transition-all ease-in-out">
          Login
        </button>
      </div>
    </div>
  );
}
