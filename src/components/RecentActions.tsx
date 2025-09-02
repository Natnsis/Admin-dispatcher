import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RecentActions() {
  const recentActions = [
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
  ];

  return (
    <Card className="border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Recent Actions</CardTitle>
        <CardDescription>System and user activity log</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {recentActions.map((action) => (
            <li
              key={action.id}
              className="text-sm pb-2 border-b border-border/40 last:border-0"
            >
              <p className="font-medium text-foreground">{action.action}</p>
              <p className="text-xs text-muted-foreground mt-1">
                By{" "}
                <span className="font-semibold text-foreground">
                  {action.by}
                </span>{" "}
                • {action.time}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
