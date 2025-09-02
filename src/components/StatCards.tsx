import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StatCards() {
  const stats = [
    {
      label: "Active Dispatchers",
      value: "14",
      change: "+2 today",
      color: "text-blue-600 dark:text-blue-400",
      icon: (
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
      ),
    },
    {
      label: "Incidents Active",
      value: "3",
      change: "1 high priority",
      color: "text-orange-600 dark:text-orange-400",
      icon: <div className="w-2 h-2 rounded-full bg-orange-500"></div>,
    },
    {
      label: "Avg. Response Time",
      value: "4.2 min",
      change: "-0.8 min",
      color: "text-green-600 dark:text-green-400",
      icon: (
        <svg
          className="w-4 h-4 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      ),
    },
    {
      label: "Traffic Flow Index",
      value: "87%",
      change: "↑ 5%",
      color: "text-emerald-600 dark:text-emerald-400",
      icon: (
        <svg
          className="w-4 h-4 text-emerald-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-8 8"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <Card
          key={i}
          className="border-border hover:shadow-lg transition-all duration-200 hover:border-primary/20"
        >
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <div>
              <CardDescription className="text-xs text-muted-foreground">
                {stat.label}
              </CardDescription>
              <CardTitle className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </CardTitle>
            </div>
            <div>{stat.icon}</div>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
