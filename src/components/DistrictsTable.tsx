import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { useEffect } from "react";
import { useDistrictStore, type DistrictType } from "@/stores/DistrictStore";

export function DistrictsTable() {
  const fetchDistrict = useDistrictStore((state) => state.getDistrict);
  const data = useDistrictStore((state) => state.districts) as DistrictType[];
  const deleteDistrict = useDistrictStore((state) => state.deleteDistrict);
  useEffect(() => {
    fetchDistrict();
  }, [fetchDistrict, deleteDistrict]);

  console.log(data);
  return (
    <div className="h-[70vh] overflow-y-auto rounded-md border">
      <Table>
        <TableHeader className="sticky top-0 z-10 ">
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Latitude</TableHead>
            <TableHead>Longitude</TableHead>
            <TableHead>Created Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((d, index) => (
            <TableRow key={d.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{d.name}</TableCell>
              <TableCell>{d.latitude}</TableCell>
              <TableCell>{d.longitude}</TableCell>
              <TableCell>{d.createdAt}</TableCell>
              <TableCell className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    deleteDistrict(d.id!);
                  }}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
