import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DispatchersTable() {
  const [dispatchers, setDispatchers] = useState([
    {
      id: 1,
      name: "Maria T.",
      zone: "Zone 5",
      status: "Active",
      time: "Now",
    },
    {
      id: 2,
      name: "Raj K.",
      zone: "Zone 2",
      status: "On Break",
      time: "5 min ago",
    },
    {
      id: 3,
      name: "Luis M.",
      zone: "Zone 7",
      status: "Active",
      time: "2 min ago",
    },
  ]);

  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null); // Ref to track dropdown container

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to remove this dispatcher?")) {
      setDispatchers((prev) => prev.filter((d) => d.id !== id));
    }
    setOpenMenu(null);
  };

  const handleEdit = (id) => {
    const dispatcher = dispatchers.find((d) => d.id === id);
    const newZone = prompt("Edit Zone:", dispatcher.zone);
    const newStatus = prompt(
      "Edit Status (Active, On Break, Offline):",
      dispatcher.status
    );

    if (newZone && newStatus) {
      setDispatchers((prev) =>
        prev.map((d) =>
          d.id === id
            ? { ...d, zone: newZone.trim(), status: newStatus.trim() }
            : d
        )
      );
    }
    setOpenMenu(null);
  };

  return (
    <Card className="border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Manage Dispatchers</CardTitle>
        <CardDescription>Active personnel and real-time status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-md border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/30 text-muted-foreground">
                <th className="text-left py-3 px-4 rounded-tl-md">Name</th>
                <th className="text-left py-3 px-4">Zone</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Last Active</th>
                <th className="text-left py-3 px-4 rounded-tr-md">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dispatchers.map((d) => (
                <tr
                  key={d.id}
                  className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                >
                  <td className="py-3 px-4 font-medium">{d.name}</td>
                  <td className="py-3 px-4 text-muted-foreground">{d.zone}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant={
                        d.status === "Active"
                          ? "default"
                          : d.status === "On Break"
                          ? "secondary"
                          : "outline"
                      }
                      className={
                        d.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : d.status === "On Break"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                      }
                    >
                      {d.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{d.time}</td>
                  <td className="py-3 px-4">
                    <div ref={menuRef} className="relative inline-block">
                      {/* Action Button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-muted"
                        onClick={() =>
                          setOpenMenu(openMenu === d.id ? null : d.id)
                        }
                      >
                        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                      </Button>

                      {/* Dropdown Menu */}
                      {openMenu === d.id && (
                        <div className="absolute right-0 mt-1 w-40 bg-card border border-border rounded-md shadow-lg z-50 py-1">
                          <button
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-muted text-left text-foreground"
                            onClick={() => handleEdit(d.id)}
                          >
                            <Edit className="h-3.5 w-3.5 text-blue-500" />
                            Edit
                          </button>
                          <button
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-muted text-left text-red-600"
                            onClick={() => handleDelete(d.id)}
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Dispatcher Button */}
        <div className="mt-4 flex justify-end">
          <Link to="/addDispatcher">
            <Button variant="outline" size="sm" className="gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add Dispatcher
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
