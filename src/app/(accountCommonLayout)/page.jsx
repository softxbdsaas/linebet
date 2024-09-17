import LineStreams from "@/components/streams/lineStreams/LineStreams";
import WithLiveStreams from "@/components/streams/withLiveStreams/WithLiveStreams";
import HomeHero from "@/components/ui/banners/HomeHero";
import GamesSlider from "@/components/ui/gamesSlider/GamesSlider";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HomeHero />
      <GamesSlider />
      <WithLiveStreams />
      <LineStreams />
      <div className="pt-4">
     
      </div>
    </div>
  );
}
