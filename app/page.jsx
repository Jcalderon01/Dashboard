import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], weight: "400" });

function Home() {
  return (
    <div className="bg-[#415A77] h-screen w-full">
      <h1 className={"text-white text-center text-2xl mt-3 ${rubik.className}"}>
        Home
      </h1>
    </div>
  );
}

export default Home;
