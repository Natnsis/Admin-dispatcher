import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DistrictsForm = () => (
  <div className="h-screen flex justify-center items-center">
    <div className="border-2 border-[#4d3e27] p-5 rounded-xl">
      <h1 className="font-heading text-3xl">District Form</h1>
      <form className="mt-5 flex flex-col gap-5">
        <div className="">
          <Input placeholder="Name Of District" />
        </div>
        <div className="flex gap-5 ">
          <Input placeholder="Longitude" type="number" />
          <Input placeholder="Latitude" type="number" />
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  </div>
);

export default DistrictsForm;
