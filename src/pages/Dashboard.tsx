// Dashboard.jsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "lucide-react";
import React, { useState } from "react";

const Dashboard = () => {
  const [notifications] = useState([
    {
      id: 1,
      message: "High congestion detected on Main St",
      time: "2 min ago",
      type: "alert",
    },
    {
      id: 2,
      message: "Dispatcher Maria assigned to Zone 5",
      time: "5 min ago",
      type: "info",
    },
    {
      id: 3,
      message: "Emergency route activated for ambulance",
      time: "8 min ago",
      type: "urgent",
    },
  ]);

  const [recentActions] = useState([
    {
      id: 1,
      action: "Signal override at 5th & Oak",
      by: "AI System",
      time: "Just now",
    },
    {
      id: 2,
      action: "Dispatcher Raj logged in",
      by: "Raj K.",
      time: "3 min ago",
    },
    {
      id: 3,
      action: "Traffic flow improved by 22%",
      by: "AI Optimization",
      time: "10 min ago",
    },
  ]);

  const stats = [
    {
      label: "Active Dispatchers",
      value: "14",
      change: "+2 today",
      color: "text-blue-500",
    },
    {
      label: "Incidents Active",
      value: "3",
      change: "1 high priority",
      color: "text-orange-500",
    },
    {
      label: "Avg. Response Time",
      value: "4.2 min",
      change: "-0.8 min",
      color: "text-green-500",
    },
    {
      label: "Traffic Flow Index",
      value: "87%",
      change: "↑ 5%",
      color: "text-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-40">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo / Home */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <a
              href="/dashboard"
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Dispatch Control
            </a>
          </div>

          <div className="flex items-center gap-6">
            {/* Notifications */}
            <div className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM10.5 3.5L2 12v8a2 2 0 002 2h16a2 2 0 002-2v-8l-8.5-8.5a2 2 0 00-2.83 0z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>
              <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50 hidden sm:block">
                <div className="p-4 border-b border-border">
                  <h3 className="font-semibold">Notifications</h3>
                </div>
                <ul className="divide-y divide-border max-h-60 overflow-y-auto">
                  {notifications.map((n) => (
                    <li key={n.id} className="p-3 hover:bg-muted transition">
                      <p
                        className={`text-sm ${
                          n.type === "urgent"
                            ? "font-bold text-red-500"
                            : "text-foreground"
                        }`}
                      >
                        {n.message}
                      </p>
                      <p className="text-xs text-muted-foreground">{n.time}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatar.jpg" alt="User" />
                <AvatarFallback>DC</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-foreground">Admin</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => alert("Logged out")}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-6 px-6 space-y-8">
        {/* Stat Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Card key={i} className="border-border hover:shadow-md transition">
              <CardHeader className="pb-2">
                <CardDescription className="text-muted-foreground">
                  {stat.label}
                </CardDescription>
                <CardTitle className={`text-2xl ${stat.color}`}>
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Placeholder + Recent Actions */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Area */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Traffic Overview Map</CardTitle>
              <CardDescription>
                Live traffic heatmap and dispatcher locations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-border flex items-center justify-center">
                <p className="text-muted-foreground">
                  Map will be integrated here
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Actions */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Recent Actions</CardTitle>
              <CardDescription>System and dispatcher activity</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {recentActions.map((action) => (
                  <li
                    key={action.id}
                    className="text-sm border-b border-border/50 pb-2"
                  >
                    <p className="font-medium">{action.action}</p>
                    <p className="text-xs text-muted-foreground">
                      By <span className="font-semibold">{action.by}</span> •{" "}
                      {action.time}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Dispatchers Management */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Manage Dispatchers</CardTitle>
            <CardDescription>Active personnel and assignments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2">Name</th>
                    <th className="text-left py-2">Zone</th>
                    <th className="text-left py-2">Status</th>
                    <th className="text-left py-2">Last Active</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Maria T.",
                      zone: "Zone 5",
                      status: "Active",
                      time: "Now",
                    },
                    {
                      name: "Raj K.",
                      zone: "Zone 2",
                      status: "On Break",
                      time: "5 min ago",
                    },
                    {
                      name: "Luis M.",
                      zone: "Zone 7",
                      status: "Active",
                      time: "2 min ago",
                    },
                  ].map((d, i) => (
                    <tr
                      key={i}
                      className="border-b border-border/50 hover:bg-muted/30"
                    >
                      <td className="py-2">{d.name}</td>
                      <td>{d.zone}</td>
                      <td>
                        <Badge>{d.status}</Badge>
                      </td>
                      <td className="text-muted-foreground">{d.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm">
                Add Dispatcher
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
