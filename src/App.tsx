// App.jsx
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";

const App = () => {
  return (
    <div className="min-h-screen font-sans antialiased">
      {/* Navbar */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dispatch Control
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a
              href="#features"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#ai"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              AI Engine
            </a>
            <a
              href="/login"
              className="text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <Badge
          variant="secondary"
          className="mb-6 bg-primary/10 text-primary border border-primary/20"
        >
          🚀 AI-Powered Traffic Intelligence
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Smarter{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Traffic
          </span>{" "}
          Flow
        </h1>
        <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-3xl mx-auto">
          Dispatch Control uses real-time AI analytics to optimize urban
          traffic, reduce congestion, and enhance emergency response routing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Get Started
          </Button>
          {/* Removed Watch Demo button */}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Core Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  🤖 AI Traffic Prediction
                </CardTitle>
                <CardDescription>
                  Anticipate congestion before it happens
                </CardDescription>
              </CardHeader>
              <CardContent>
                Our neural network analyzes historical and live data to predict
                traffic patterns up to 60 minutes in advance.
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  🚨 Emergency Dispatch Priority
                </CardTitle>
                <CardDescription>Fast-track emergency vehicles</CardDescription>
              </CardHeader>
              <CardContent>
                Dynamically adjusts signals to clear paths for ambulances, fire
                trucks, and police in real time.
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  🌐 City-Wide Integration
                </CardTitle>
                <CardDescription>
                  Seamless smart city compatibility
                </CardDescription>
              </CardHeader>
              <CardContent>
                Integrates with IoT sensors, public transit, and municipal
                systems for unified traffic control.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Engine */}
      <section id="ai" className="py-24">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Powered by Deep Learning
            </h2>
            <p className="text-muted-foreground mb-6">
              Dispatch Control's AI engine processes millions of data points —
              from GPS, cameras, and sensors — to optimize signal timing, reduce
              idle time, and improve flow.
            </p>
            <ul className="space-y-3">
              {[
                "Real-time congestion analysis",
                "Adaptive signal control",
                "Incident detection",
                "Predictive rerouting",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-foreground/90"
                >
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-border flex items-center justify-center">
              <p className="text-muted-foreground">
                AI Traffic Dashboard Preview
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Dispatch Control. Built with AI & ❤️
        for smarter cities.
      </footer>
    </div>
  );
};

export default App;
