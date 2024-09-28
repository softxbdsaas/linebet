import LineStreams from "@/components/streams/lineStreams/LineStreams";
import WithLiveStreams from "@/components/streams/withLiveStreams/WithLiveStreams";
import HomeGamesSliders from "@/components/ui/banners/HomeGamesSliders";
import HomeHero from "@/components/ui/banners/HomeHero";
import MobileCasinoSlider from "@/components/ui/banners/MobileCasinoSlider";
import MobileHomeHero from "@/components/ui/banners/MobileHomeHero";
import GamesSlider from "@/components/ui/gamesSlider/GamesSlider";
import HomeMobileForTab from "@/components/withCommonLayout/home/HomeMobileForTab";
import HomeSportsSection from "@/components/withCommonLayout/home/HomeSportsSection";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <div className=" hidden sm:block">
          <HomeHero />
        </div>
        <div className="sm:hidden">
          <MobileHomeHero />
        </div>

        <div className="hidden sm:block ">
          <GamesSlider />
        </div>
        <div className="sm:hidden pt-2">
          <MobileCasinoSlider />
        </div>

        <div className="hidden md:block">
          <WithLiveStreams />
          <LineStreams />
        </div>

        <div className="sm:hidden">
          <HomeMobileForTab />
        </div>
        <div className="md:hidden">
          <HomeSportsSection />
        </div>
        <div className="sm:hidden">
          <HomeGamesSliders />
        </div>
        <div className="pt-4"></div>
      </div>
    </div>
  );
};

export default page;
