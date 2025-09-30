import { bigHeaders } from "./assets/styles";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

const App = () => {
  return (
    <div className="p-5 flex flex-col gap-15">
      <header className="flex justify-between items-center">
        <h1 className="font-heading text-4xl">Trafico</h1>
        <nav className="flex items-center gap-5 font-bold">
          <a href="">Features</a>
          <a href="">Benefits</a>
          <a href="">How It Works</a>
          <a href="">Developers</a>
          <Button className="mx-5">Login</Button>
        </nav>
      </header>

      <main className="flex gap-20 justify-between px-15 w-screen">
        <div className="flex flex-col gap-5 w-1/2 ">
          <h1 className={bigHeaders}>Tracking Traffic</h1>
          <h1 className={bigHeaders}> Movement </h1>
          <h1 className={bigHeaders}>All Over </h1>
          <h1 className={bigHeaders}>Districts</h1>
          <div>
            <p className="font-text text-lg">
              An AI-powered platform designed and implemented to assist traffic
              officers in managing vehicle flow, improving public access to
              transportation, and automating district-level operations.
            </p>
          </div>
          <div className="flex gap-5">
            <Button>Get Started</Button>
            <Button variant="outline">Watch Demo</Button>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="relative h-[60vh] w-full">
            <img
              src="/Hero.png"
              alt="hero image"
              className="h-full w-full object-cover rounded-4xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#d6d7d2] to-transparent"></div>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default App;
