import { miniCards } from "@/assets/styles";
import { DispatchersTable } from "@/components/DispatchersTable";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

const Dispatchers = () => {
  return (
    <div className="grid grid-cols-6 h-screen">
      <div className="col-span-1 border-r-1 border-[#4d3e27] p-5">
        <Sidebar />
      </div>
      <div className="col-span-5 p-5 ">
        <div className="flex justify-between items-center p-5">
          <h1 className="font-heading text-4xl">Manage Dispatchers</h1>
          <Button>
            <UserPlus />
            <p>Add Dispatcher</p>
          </Button>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex justify-between w-2/3 mb-10">
            <div className={miniCards}>hehe</div>
            <div className={miniCards}>hehe</div>
            <div className={miniCards}>hehe</div>
            <div className={miniCards}>hehe</div>
          </div>
        </div>

        <div className="border-2 border-[#4d3e27] rounded-xl p-5">
          <h1 className="text-2xl">All Dispatchers</h1>
          <DispatchersTable />
        </div>
      </div>
    </div>
  );
};

export default Dispatchers;
