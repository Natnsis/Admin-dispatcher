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

const DispatchersForm = () => (
  <div className="h-screen flex justify-center items-center">
    <div className="border-2 border-[#4d3e27] p-5 rounded-xl">
      <h1 className="font-heading text-3xl">Dispatchers Form</h1>
      <form className="mt-5 flex flex-col gap-5">
        <div className="flex gap-5">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </div>
        <div className="flex gap-5 flex-col">
          <Input placeholder="Username" />
          <Input placeholder="Password" />
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select District</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
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
          <input type="file" className="hidden" id="image" />
          <span>no image selected</span>
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  </div>
);

export default DispatchersForm;
