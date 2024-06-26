import Image from "next/image.js";
import HomeHeader from "../components/HomeHeader.jsx";
import HomeSearch from "@/components/HomeSearch.jsx";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
          }
          width={300}
          height={100}
          alt="google logo wikipedia"
          priority
          style={{ width: "auto" }}
        />
      </div>
      <HomeSearch />
    </>
  );
}
