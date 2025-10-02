import { bigHeaders } from "@/assets/styles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/stores/AuthStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const login = useAuthStore((state) => state.login);
  const user = useAuthStore((state) => state.user);
  const error = useAuthStore((state) => state.error);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { username, password };
    login(data);
    if (error) {
      console.log(error);
      return;
    }
    if (user?.user.role !== "Admin") {
      alert("you are not an admin");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-between w-screen h-screen">
      <div className="flex justify-center items-center w-[50vw]">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1 className="font-heading">Trafico</h1>
          <h2 className={bigHeaders}>Welcome Back</h2>
          <Input
            value={username}
            placeholder="admin@gmail.com"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="*********"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
      <div className="flex justify-end h-full ">
        <img src="./Login.png" className="w-[50vw] h-full" alt="login-image" />
      </div>
    </div>
  );
};

export default Login;
