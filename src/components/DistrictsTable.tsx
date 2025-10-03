import { Dispatch, District } from "@/assets/demo";
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

export function DistrictsTable() {
  return (
    <div className="h-[70vh] overflow-y-auto rounded-md border">
      <Table>
        <TableHeader className="sticky top-0 z-10 ">
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Latitude</TableHead>
            <TableHead>Longitude</TableHead>
            <TableHead>Created Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {District.map((d) => (
            <TableRow key={d.id}>
              <TableCell>{d.name}</TableCell>
              <TableCell>{d.latitude}</TableCell>
              <TableCell>{d.longitude}</TableCell>
              <TableCell>{d.createdAt}</TableCell>
              <TableCell className="flex gap-2">
                <Button variant="ghost" size="sm">
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
