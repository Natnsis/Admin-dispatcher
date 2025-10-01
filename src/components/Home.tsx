import { miniCards } from "@/assets/styles";
import { ChartBarDefault } from "./BarChart";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="font-bold border-2 border-[#4d3e27] p-5 rounded-xl ">
        <h1 className="">Welcome to the Platform</h1>
        <p className="text-heading text-3xl">
          Here you can oversee districts, manage dispatchers, and monitor
          real-time traffic conditions powered by{" "}
          <span className="underline">AI</span>.
        </p>
      </div>
      <div className="flex justify-between">
        <div className={miniCards}>
          <h1 className="text-2xl font-bold">24</h1>
          <p className="font-text">Todays Mov't</p>
        </div>
        <div className={miniCards}>
          <h1 className="text-2xl font-bold">24</h1>
          <p className="font-text">Online Dispatchers</p>
        </div>
        <div className={miniCards}>
          <h1 className="text-2xl font-bold">coming soon..</h1>
          <p className="font-text">Average Rating</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-heading text-xl">Traffic flow Status</h1>
        <ChartBarDefault />
      </div>
    </div>
  );
};

export default Home;
