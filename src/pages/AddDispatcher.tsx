// components/dashboard/AddDispatcher.jsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AddDispatcher = () => {
  const [formData, setFormData] = useState({
    name: "",
    zone: "",
    status: "Active",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app: send to API
    console.log("New Dispatcher:", formData);
    alert(`${formData.name} has been added as a dispatcher!`);
    // Reset form
    setFormData({ name: "", zone: "", status: "Active" });
  };

  return (
    <div className="container mx-auto py-8 px-6 max-w-2xl">
      {/* Back Button */}
      <Button
        asChild
        variant="ghost"
        size="sm"
        className="mb-6 gap-2 text-foreground"
      >
        <Link to="/dashboard">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
      </Button>

      {/* Add Dispatcher Form */}
      <Card className="border-border shadow-sm">
        <CardHeader>
          <CardTitle>Add New Dispatcher</CardTitle>
          <CardDescription>
            Fill in the details to register a new dispatcher into the system.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="e.g. Maria Thompson"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>

            {/* Zone Field */}
            <div className="space-y-2">
              <Label htmlFor="zone">Zone</Label>
              <Input
                id="zone"
                placeholder="e.g. Zone 5"
                value={formData.zone}
                onChange={(e) => handleChange("zone", e.target.value)}
                required
              />
            </div>

            {/* Status Field */}
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                onValueChange={(value) => handleChange("status", value)}
                defaultValue={formData.status}
              >
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="On Break">On Break</SelectItem>
                  <SelectItem value="Offline">Offline</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Add Dispatcher
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default AddDispatcher;
