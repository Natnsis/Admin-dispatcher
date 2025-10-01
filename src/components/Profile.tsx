import { BellIcon } from "lucide-react";
import { ProfilePic } from "./Avatar";
import { miniCards } from "@/assets/styles";
import { dispatchers } from "@/assets/demo";

const Profile = () => {
  return (
    <div className="px-5 flex flex-col gap-5">
      <div className="flex justify-between ">
        <button>
          <BellIcon />
        </button>
        <div className="flex items-center gap-1">
          <ProfilePic />
          <h1 className="font-heading text-lg">Admin Page</h1>
        </div>
      </div>
      <div className={miniCards}>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src="/admin.png" alt="pfp" className="rounded-full h-20 w-20" />
          <p className="font-heading text-xl">Good Morning Admin!</p>
        </div>
      </div>
      <div className="font-bold border-2 border-[#4d3e27] p-5 rounded-xl">
        <h1 className="text-start mb-5 text-xl font-text">
          Online Dispatchers
        </h1>
        <div className="overflow-y-auto h-[50vh] px-5 flex flex-col gap-5">
          {dispatchers.map((d) => (
            <div key={d.id} className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img src={d.url} alt="pfp" className="rounded-full h-10 w-10" />
                <p>{d.name}</p>
              </div>
              <div>
                <p>{d.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
