import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDistrictStore, type DistrictType } from "@/stores/DistrictStore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DispatchersForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [districtId, setDistrictId] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/dispatchers");
  };
  const fetchDistricts = useDistrictStore((state) => state.getDistrict);
  const districts = useDistrictStore(
    (state) => state.districts
  ) as DistrictType[];

  useEffect(() => {
    fetchDistricts();
  }, [fetchDistricts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { firstName, lastName, username, password, districtId, image };
    console.log(data);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-2 border-[#4d3e27] p-5 rounded-xl">
        <div className="flex justify-end">
          <Button onClick={goBack}>Back</Button>
        </div>
        <h1 className="font-heading text-3xl">Dispatchers Form</h1>
        <form className="mt-5 flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex gap-5">
            <Input
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <Input
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-5 flex-col">
            <Input
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Input
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <Select onValueChange={(newValue) => setDistrictId(newValue)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a district" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select District</SelectLabel>
                  {districts.map((d) => (
                    <SelectItem value={d.id!}>{d.name}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-5 items-center">
            <label
              htmlFor="image"
              className="bg-primary text-background font-bold px-3 py-1 rounded-lg "
            >
              Select Image
            </label>
            <input
              type="file"
              className="hidden"
              id="image"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setImage(e.target.files[0]);
                }
              }}
            />
            <span>{image ? image.name : "no image selected"}</span>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default DispatchersForm;
