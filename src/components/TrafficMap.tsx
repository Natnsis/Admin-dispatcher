import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TrafficMap() {
  return (
    <Card className="border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Traffic Overview Map</CardTitle>
        <CardDescription>Live heatmap and dispatcher locations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-border flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382v-10.764a1 1 0 00-.553-.894L15 7"
                />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">
              Map integration pending
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
