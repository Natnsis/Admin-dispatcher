import { miniCards } from "@/assets/styles";
import { ChartBarDefault } from "@/components/BarChart";
import { Button } from "@/components/ui/button";
import { Inbox, LayoutDashboard, LogOut, MapPlus, UserPen } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-6 h-screen">
      <div className="col-span-1 border-r-1 border-[#4d3e27] p-5">
        <div className="pb-10">
          <h1 className="font-heading text-4xl">Trafico</h1>
        </div>
        <div className="pl-5 pb-2 text-sm font-text">
          <p className="text-sm">OVERVIEW</p>
        </div>
        <div className="font-bold flex flex-col gap-5">
          <Button className="flex gap-1 items-center pl-5">
            <LayoutDashboard />
            <p>Dashboard</p>
          </Button>
          <Button className="flex gap-1 items-center pl-5">
            <UserPen />
            <p>Dispatchers</p>
          </Button>
          <Button className="flex gap-1 items-center pl-5">
            <MapPlus />
            <p>Districts</p>
          </Button>
          <Button className="flex gap-1 items-center pl-5 ">
            <Inbox />
            <p>Inbox</p>
          </Button>
        </div>
        <div className="absolute bottom-5">
          <Button className="flex gap-1 items-center pl-5 ">
            <LogOut />
            Logout
          </Button>
        </div>
      </div>
      <div className="col-span-3  p-5 ">
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
          <div>
            <h1 className="font-heading text-xl">Traffic flow Status</h1>
            <ChartBarDefault />
          </div>
        </div>
      </div>
      <div className="col-span-2">hehe</div>
    </div>
  );
};

export default Dashboard;
