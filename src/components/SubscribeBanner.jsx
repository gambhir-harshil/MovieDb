import banner from "../assets/banner.png";
export default function SubscribeBanner() {
  return (
    <div className=" bg-cover flex justify-center mt-16 relative px-4">
      <div className="relative h-72 lg:w-[60%] lg:h-96">
        <img
          src={banner}
          alt="banner"
          className="rounded-lg h-full w-full filter brightness-50"
        />
        <div className="absolute right-8 top-1/2 text-white flex flex-col gap-4">
          <h1 className=" font-semibold text-2xl">Explore more with Premium</h1>
          <div className="flex justify-around items-center text">
            <button className="bg-red-600 px-4 py-2 border-red-600 border-2 rounded-3xl font-bold shadow-lg hover:bg-transparent transition-all ease-in">
              Subscribe now
            </button>
            <span className="font-medium text-red-300">Only ₹199/month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
