import { Container, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import useLogin from "../hooks/useLogin";
import Heading from "../ui/Heading";
import AuthButton from "../ui/AuthButton";

const Login = () => {
  const nevigate = useNavigate();
  const { register, handleSubmit } = useForm();
  
  const { user, route } = useSelector((state) => state.auth);
  const { mutate, isError, isPending } = useLogin();

  const formSubmit = (formdata) => {
    mutate(formdata);
  };

  useEffect(() => {
    if (user) {
      return nevigate(route ? route : "/");
    }
  }, [nevigate, route, user]);

  return (
    <Container sx={{ marginBlock: "100px", width: "600px" }}>
      <Heading>Welcome Back</Heading>
      <form onSubmit={handleSubmit(formSubmit)}>
        <TextField
          type="email"
          label="Email"
          fullWidth
          id="email"
          required
          {...register("email")}
        />
        <TextField
          type="password"
          label="password"
          fullWidth
          id="password"
          sx={{ margin: "10px 0px" }}
          required
          {...register("password")}
        />
        <AuthButton isPending={isPending}>Login</AuthButton>
      </form>
      {isError && (
        <Typography
          variant="h6"
          sx={{ marginTop: "20px" }}
          color={"red"}
          textAlign={"center"}
        >
          &quot;Oops! user not found&quot; click to:
          <Link to={"/register"}> register here</Link>
        </Typography>
      )}
    </Container>
  );
};

export default Login;
