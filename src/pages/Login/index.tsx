import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/");
  };
  return (
    <div>
      <Button type="primary" onClick={login}>
        Login
      </Button>
    </div>
  );
}

export default Login;
