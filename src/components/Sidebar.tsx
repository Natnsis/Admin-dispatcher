import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Inbox, LayoutDashboard, MapPlus, UserPen } from "lucide-react";
import { links } from "@/assets/styles";

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
        <Link to="/dashboard" className={links}>
          <LayoutDashboard />
          <p>Dashboard</p>
        </Link>
        <Link to="/dispatchers" className={links}>
          <UserPen />
          <p>Dispatchers</p>
        </Link>
        <Link to="/districts" className={links}>
          <MapPlus />
          <p>Districts</p>
        </Link>
        <Link to="/inbox" className={links}>
          <Inbox />
          <p>Inbox</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
