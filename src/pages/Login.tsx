import { bigHeaders } from "@/assets/styles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/dashboard");
  };
  return (
    <div className="flex justify-between w-screen h-screen">
      <div className="flex justify-center items-center w-[50vw]">
        <div className="flex flex-col gap-5">
          <h1 className="font-heading">Trafico</h1>
          <h2 className={bigHeaders}>Welcome Back</h2>
          <Input placeholder="admin@gmail.com" />
          <Input placeholder="*********" type="password" />
          <Button onClick={login}>Login</Button>
        </div>
      </div>
      <div className="flex justify-end h-full ">
        <img src="./Login.png" className="w-[50vw] h-full" alt="login-image" />
      </div>
    </div>
  );
};

export default Login;
