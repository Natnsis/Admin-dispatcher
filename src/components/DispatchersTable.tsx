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
import { useDispatcherStore } from "@/stores/DispatcherStore";
import { useEffect } from "react";

export function DispatchersTable() {
  const { getDispatchers, deleteDispatcher, dispatchers } =
    useDispatcherStore();
  useEffect(() => {
    getDispatchers();
  }, [getDispatchers]);

  return (
    <div className="h-[50vh] overflow-y-auto rounded-md border">
      <Table>
        <TableHeader className="sticky top-0 z-10">
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dispatchers.map((d, index) => (
            <TableRow key={d.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <img
                  src={d.url}
                  alt="profile"
                  className="h-10 w-10 rounded-full"
                />
              </TableCell>
              {}
              <TableCell>{d.fName}</TableCell>
              <TableCell>{d.lName}</TableCell>
              <TableCell className="flex gap-2 justify-start">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteDispatcher(d.id)}
                >
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
