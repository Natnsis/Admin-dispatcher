import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/stores/authStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const data = { email, password };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // try{
    //await login(data);
    //const userId = useAuthStore.getState.userId;
    //if(!userId) console.log("unable to get userId")
    //navigate("/dashboard");
    // }catch(e){

    // }

    // Simulate login API call
    setTimeout(() => {
      console.log("Logging in with:", { email, password });
      // You can add real authentication logic here
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background font-sans">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-xl border border-border shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <div className="w-4 h-4 bg-accent rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Dispatch Control
          </h1>
          <p className="mt-2 text-muted-foreground">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-background"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-primary hover:underline font-medium"
          >
            Contact Admin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
