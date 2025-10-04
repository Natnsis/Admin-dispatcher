import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDistrictStore } from "@/stores/DistrictStore";
import { useState } from "react";

const DistrictsForm = () => {
  const [name, setName] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");
  const [latitude, setLatitude] = useState<string>("");
  const add = useDistrictStore((state) => state.addDistrict);
  const response = useDistrictStore((state) => state.response);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { name, longitude, latitude };
    try {
      setIsLoading(true);
      await add(data);
      setIsLoading(false);
      alert(response);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-2 border-[#4d3e27] p-5 rounded-xl">
        <h1 className="font-heading text-3xl">District Form</h1>
        <form className="mt-5 flex flex-col gap-5" onSubmit={onSubmit}>
          <div className="">
            <Input
              placeholder="Name Of District"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-5 ">
            <Input
              placeholder="Longitude"
              type="number"
              onChange={(e) => {
                setLongitude(e.target.value);
              }}
            />
            <Input
              placeholder="Latitude"
              type="number"
              onChange={(e) => {
                setLatitude(e.target.value);
              }}
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting" : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DistrictsForm;
