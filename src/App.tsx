import { bigHeaders, miniCards } from "./assets/styles";
import { Button } from "./components/ui/button";
import {
  Bot,
  CarFront,
  Github,
  Linkedin,
  MapMinus,
  Send,
  Smartphone,
  TrafficCone,
  Twitter,
  Workflow,
} from "lucide-react";
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
          <div className="flex justify-between items-center px-10">
            <div className={miniCards}>
              <Bot />
              <h1>Ai Integrated</h1>
            </div>
            <div className={miniCards}>
              <CarFront />
              <h1>Fast Traffic</h1>
            </div>
            <div className={miniCards}>
              <Workflow />
              <h1>Automated</h1>
            </div>
          </div>
        </div>
      </main>

      <section className="px-15 py-5 flex flex-col gap-10">
        <div className="flex gap-10 w-full">
          <div className="w-1/3 flex flex-col gap-5">
            <p className="font-text text-lg w-full">
              AI-powered platform that optimizes traffic flow, gives real-time
              insights, automates district tasks, and makes transport more
              accessible and efficient.
            </p>
          </div>
          <div className="">
            <h1 className={bigHeaders}>Contains Core To</h1>
            <h1 className={bigHeaders}>Execute Its Purpose</h1>
          </div>
        </div>
        <div className="flex justify-between gap-10">
          <Card className="p-5 flex flex-col items-center h-fit">
            <TrafficCone size={100} />
            <h1 className="font-heading">Smart Traffic Insights</h1>
            <p className="font-text text-lg">
              Real-time AI analysis of traffic conditions for each district.
            </p>
          </Card>
          <Card className="p-5 flex flex-col items-center h-fit">
            <MapMinus size={100} />
            <h1 className="font-heading">District Management</h1>
            <p className="font-text text-lg">
              Admins can add districts, assign dispatchers, and monitor
              activity.
            </p>
          </Card>{" "}
          <Card className="p-5 flex flex-col items-center h-fit">
            <Smartphone size={100} />
            <h1 className="font-heading">Dispatcher App</h1>
            <p className="font-text text-lg">
              Simple mobile app for dispatchers to send traffic updates
              instantly.
            </p>
            <ul className="font-text text-lg list-disc list-inside space-y-2">
              <li>District Assignment</li>
              <li>Traffic Reporting</li>
              <li>Secure Access</li>
            </ul>
          </Card>{" "}
          <Card className="p-5 flex flex-col items-center h-fit">
            <Bot size={100} />
            <h1 className="font-heading">AI Decision Engine</h1>
            <p className="font-text text-lg">
              Automated vehicle allocation and flow management with no manual
              intervention.
            </p>
          </Card>
        </div>
      </section>
      <section className="px-15 py-5 gap-10">
        <div className="flex justify-center flex-col ">
          <h1 className="font-heading text-center text-xl">Contact Us</h1>
          <p className="font-text text-lg px-40 text-center">
            If you are looking for a developer to build AI-driven traffic
            management solutions or similar projects, feel free to reach out. I
            am available to collaborate and bring innovative, automated systems
            from concept to implementation.
          </p>
        </div>
        <div className="flex justify-center gap-10 items-center mt-10">
          <div className={miniCards}>
            <Send />
            <p>Telegram</p>
          </div>
          <div className={miniCards}>
            <Linkedin />
            <p>Telegram</p>
          </div>
          <div className={miniCards}>
            <Twitter />
            <p>Telegram</p>
          </div>
          <div className={miniCards}>
            <Github />
            <p>Telegram</p>
          </div>
        </div>
      </section>
      <footer className="font-text flex justify-center gap-1">
        {" "}
        <p>&copy; 2025 My Traffic AI Platform. All rights reserved.</p>
        <a href="/contact" className="underline">
          Contact Us
        </a>
      </footer>
    </div>
  );
};

export default App;
