import { Dispatch } from "@/assets/demo";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Pencil, Trash } from "lucide-react";

export function DispatchersTable() {
  return (
    <div className="h-[50vh] overflow-y-auto rounded-md border">
      <Table>
        <TableHeader className="sticky top-0 z-10">
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>District</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Dispatch.map((d) => (
            <TableRow key={d.id}>
              <TableCell>
                <img
                  src={d.url}
                  alt="profile"
                  className="h-10 w-10 rounded-full"
                />
              </TableCell>
              <TableCell>{d.name}</TableCell>
              <TableCell>{d.lname}</TableCell>
              <TableCell>{d.district}</TableCell>
              <TableCell className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Trash className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Pencil className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
