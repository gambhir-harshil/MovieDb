import blank from "../assets/blank-profile.jpg";
export default function CastCard({ celeb }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden bg-cover h-[300px] w-[240px] rounded-2xl">
        {celeb.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${celeb?.profile_path}`}
            alt={celeb.name}
          />
        ) : (
          <img src={blank} alt={celeb.name} />
        )}
      </div>
      <div>
        <h3 className="text-xl text-center">{celeb.name}</h3>
        <h5 className="text-lg text-center text-gray-400">{celeb.character}</h5>
      </div>
    </div>
  );
}
