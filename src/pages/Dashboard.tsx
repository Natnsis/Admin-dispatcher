import Home from "@/components/Home";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-6 h-screen">
      <div className="col-span-1 border-r-1 border-[#4d3e27] p-5">
        <Sidebar />
      </div>
      <div className="col-span-3  p-5 overflow-y-auto ">
        <Home />
      </div>

      <div className="col-span-2 p-5">
        <Profile />
      </div>
    </div>
  );
};

export default Dashboard;
