import { DistrictsTable } from "@/components/DistrictsTable";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Districts = () => {
  const navigate = useNavigate();
  const add = () => {
    navigate("/addDistrict");
  };
  return (
    <div className="grid grid-cols-6 h-screen">
      <div className="col-span-1 border-r-1 border-[#4d3e27] p-5">
        <Sidebar />
      </div>
      <div className="col-span-3 p-5 ">
        <div className="flex justify-between items-center p-5">
          <h1 className="font-heading text-4xl">Manage Districts</h1>
          <Button onClick={add}>
            <UserPlus />
            <p>Add District</p>
          </Button>
        </div>

        <div className="border-2 border-[#4d3e27] rounded-xl p-5">
          <h1 className="text-2xl mb-5">All Districts</h1>
          <DistrictsTable />
        </div>
      </div>
      <div className="col-span-2 p-5">
        <Profile />
      </div>
    </div>
  );
};

export default Districts;
