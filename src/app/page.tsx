import LandingPage from "@/lib/sections/Landing/Landing";
import "./globals.css";
import Explore from "@/lib/sections/Explore/Explore";
import Banner from "@/lib/Banner/Banner";
import Quote from "@/lib/sections/Quote/Quote";
import Testimony from "@/lib/sections/Testimony/Testimony";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Explore />
      {/* <Offers /> */}
      <Banner />
      <Quote />
      <Testimony />
    </>
  );
}
