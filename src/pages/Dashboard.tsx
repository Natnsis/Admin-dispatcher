import DispatchersTable from "@/components/DispatcherTable";
import Header from "@/components/Header";
import RecentActions from "@/components/RecentActions";
import StatCards from "@/components/StatCards";
import TrafficMap from "@/components/TrafficMap";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="container mx-auto py-8 px-6 space-y-8">
        <StatCards />
        <div className="grid lg:grid-cols-2 gap-8">
          <TrafficMap />
          <RecentActions />
        </div>
        <DispatchersTable />
      </main>

      {/* Optional */}
      {/* <DashboardFooter /> */}
    </div>
  );
}
