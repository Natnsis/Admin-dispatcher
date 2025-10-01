import { Button } from "./ui/button";
import { Inbox, LayoutDashboard, MapPlus, UserPen } from "lucide-react";

const Sidebar = () => {
  return (
    <div>
      {" "}
      <div className="pb-10">
        <h1 className="font-heading text-4xl">Trafico</h1>
      </div>
      <div className="pl-5 pb-2 text-sm font-text">
        <p className="text-sm">OVERVIEW</p>
      </div>
      <div className="font-bold flex flex-col gap-5">
        <Button className="flex gap-1 items-center pl-5 h-10">
          <LayoutDashboard />
          <p>Dashboard</p>
        </Button>
        <Button className="flex gap-1 items-center pl-5 h-10">
          <UserPen />
          <p>Dispatchers</p>
        </Button>
        <Button className="flex gap-1 items-center pl-5 h-10">
          <MapPlus />
          <p>Districts</p>
        </Button>
        <Button className="flex gap-1 items-center pl-5 h-10">
          <Inbox />
          <p>Inbox</p>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
