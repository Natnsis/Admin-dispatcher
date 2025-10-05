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
import { useDispatcherStore } from "@/stores/DispatcherStore";
import { useDistrictStore, type DistrictType } from "@/stores/DistrictStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DispatchersForm = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const { addDispatcher, response, error, loading } = useDispatcherStore();
  const { getDistrict, districts } = useDistrictStore();

  const navigate = useNavigate();

  useEffect(() => {
    getDistrict();
  }, [getDistrict]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return alert("Please select an image.");

    await addDispatcher({
      fName,
      lName,
      username,
      password,
      districtId,
      image,
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border-2 border-primary p-8 rounded-2xl shadow-lg w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-bold text-2xl">Add Dispatcher</h1>
          <Button onClick={() => navigate("/dispatchers")} variant="outline">
            Back
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-3">
            <Input
              placeholder="First Name"
              onChange={(e) => setFName(e.target.value)}
              required
            />
            <Input
              placeholder="Last Name"
              onChange={(e) => setLName(e.target.value)}
              required
              value={lName}
            />
          </div>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Select onValueChange={setDistrictId}>
            <SelectTrigger>
              <SelectValue placeholder="Select a district" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Districts</SelectLabel>
                {districts.map((d: DistrictType) => (
                  <SelectItem key={d.id} value={d.id!}>
                    {d.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-3">
            <label
              htmlFor="image"
              className="bg-primary text-background px-4 py-1 rounded-md cursor-pointer hover:opacity-80"
            >
              Choose Image
            </label>
            <input
              type="file"
              id="image"
              className="hidden"
              onChange={(e) => {
                if (e.target.files?.[0]) setImage(e.target.files[0]);
              }}
            />
            <span className="text-sm text-gray-500">
              {image?.name || "No image selected"}
            </span>
          </div>

          {response && (
            <p className="text-green-600 text-sm text-center">{response}</p>
          )}
          {error && <p className="text-red-600 text-sm">{error}</p>}

          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DispatchersForm;
