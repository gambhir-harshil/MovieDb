import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import GenreSelector from "../components/GenreSelector";
import MyList from "../components/MyList";
import Navbar from "../components/Navbar";
import SubscribeBanner from "../components/subscribeBanner";
import requests from "../consts/requests";
import { useList } from "../context/ListContext";

export default function Home() {
  const { list } = useList();
  return (
    <div className="h-full bg-black flex flex-col gap-8">
      <header>
        <Navbar />
        <Banner />
      </header>
      <main className="flex flex-col gap-4 px-8">
        {list.length && <MyList />}
        <Cards url={requests.fetchTopRated} title="Top Rated" />
        <Cards url={requests.fetchTrending} title="Trending" />
        <SubscribeBanner />
        <GenreSelector />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
