import { miniCards } from "@/assets/styles";
import { DispatchersTable } from "@/components/DispatchersTable";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import {
  Bot,
  CircleUser,
  MessageCircleQuestionMark,
  UserPlus,
  UsersRound,
} from "lucide-react";

const Dispatchers = () => {
  return (
    <div className="grid grid-cols-6 h-screen">
      <div className="col-span-1 border-r-1 border-[#4d3e27] p-5">
        <Sidebar />
      </div>
      <div className="col-span-3 p-5 ">
        <div className="flex justify-between items-center p-5">
          <h1 className="font-heading text-4xl">Manage Dispatchers</h1>
          <Button>
            <UserPlus />
            <p>Add Dispatcher</p>
          </Button>
        </div>
        <div className="w-full ">
          <div className="flex justify-between mb-10">
            <div className={miniCards}>
              <h1 className="font-text text-4xl">42</h1>
              <div className="flex gap-1">
                <CircleUser />
                <p>Online</p>
              </div>
            </div>
            <div className={miniCards}>
              <h1 className="font-text text-4xl">162</h1>
              <div className="flex gap-1">
                <UsersRound />
                <p>Dispatchers</p>
              </div>
            </div>
            <div className={miniCards}>
              <h1 className="font-text text-4xl">172</h1>
              <div className="flex gap-1">
                <MessageCircleQuestionMark />
                <p>Requests</p>
              </div>
            </div>
            <div className={miniCards}>
              <h1 className="font-text text-4xl">234</h1>
              <div className="flex gap-1">
                <Bot />
                <p>Responses</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-[#4d3e27] rounded-xl p-5">
          <h1 className="text-2xl">All Dispatchers</h1>
          <DispatchersTable />
        </div>
      </div>
      <div className="col-span-2 p-5">
        <Profile />
      </div>
    </div>
  );
};

export default Dispatchers;
