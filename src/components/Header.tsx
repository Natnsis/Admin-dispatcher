import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Bell, User } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function DashboardHeader() {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  const notifications = [
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
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="border-b border-border bg-card/90 backdrop-blur supports-[backdrop-filter]:bg-card/80 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          <a
            href="/dashboard"
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Dispatch Control
          </a>
        </div>

        {/* Right Side: Notifications & User */}
        <div className="flex items-center gap-4">
          {/* Notifications Bell */}
          <div ref={notificationRef} className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/20"
              onClick={() => setNotificationOpen(!notificationOpen)}
              aria-expanded={notificationOpen}
              aria-haspopup="true"
            >
              <Bell className="h-5 w-5 text-muted-foreground transition-colors duration-150 hover:text-primary" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </Button>

            {notificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50">
                <div className="p-4 border-b border-border">
                  <h3 className="font-semibold text-foreground">
                    Notifications
                  </h3>
                </div>
                <ul className="divide-y divide-border max-h-60 overflow-y-auto">
                  {notifications.map((n) => (
                    <li
                      key={n.id}
                      className="p-3 hover:bg-muted transition-colors cursor-pointer"
                    >
                      <p
                        className={`text-sm font-medium ${
                          n.type === "urgent"
                            ? "text-red-600 dark:text-red-400 font-bold"
                            : "text-foreground"
                        }`}
                      >
                        {n.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {n.time}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* User Indicator: Icon + Label */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:bg-muted transition-colors group">
              <User className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium text-foreground">Admin</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => alert("Logged out")}
            >
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
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
