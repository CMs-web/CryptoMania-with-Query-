import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useForm } from "react-hook-form";
import useRegister from "../hooks/useRegister";
import Heading from "../ui/Heading";
import AuthButton from "../ui/AuthButton";

const Register = () => {
  const { register, handleSubmit, formState, getValues } = useForm();
  const { mutate, isError, isPending } = useRegister();
  const navigate = useNavigate();
  const { errors } = formState;
  console.log(errors);

  const formSubmit = (formdata) => {
    mutate(formdata);
  };

  return (
    <Container sx={{ marginBlock: "100px", width: "600px" }}>
      <Heading>Register Here</Heading>
      <form onSubmit={handleSubmit(formSubmit)}>
        <TextField
          type="text"
          label="Name"
          fullWidth
          id="name"
          {...register("name", { required: "The name field is required" })}
        />
        <TextField
          type="email"
          label="Email"
          fullWidth
          id="email"
          sx={{ margin: "10px 0px" }}
          {...register("email", { required: "The field email is required" })}
        />
        <TextField
          type="password"
          label="password"
          fullWidth
          id="password"
          {...register("password", {
            required: "The password field is required",
          })}
        />
        <TextField
          type="password"
          label="Confirm Password"
          fullWidth
          sx={{ margin: "10px 0px" }}
          id="password2"
          {...register("password2", {
            required: "The Confirm password field is required",
            validate: () =>
              getValues().password  === getValues.password2 ?
                "confirm password not match" : true
          })}
        />
        <Box display={"flex"} justifyContent={'space-between'}>
          {isError && (
            <Button
              variant="outlined"
              sx={{ marginTop: "20px" }}
              onClick={() => navigate(-1)}
              startIcon={<KeyboardBackspaceIcon />}
              size="medium"
            >
              Back
            </Button>
          )}
          <Stack direction={'row'} >
            <Button
              variant="outlined"
              type="reset"
              size="small"
              sx={{ marginTop: "10px", marginRight: "10px" }}
            >
              Reset
            </Button>
            <AuthButton isPending={isPending}>Register</AuthButton>
          </Stack>
        </Box>
      </form>
      {isError && (
        <Typography
          variant="h6"
          sx={{ marginTop: "20px" }}
          color={"red"}
          textAlign={"center"}
        >
          &quot;Oops! It seems like you&apos;re already registered&quot;:
          <Link to={"/login"}> login here</Link>
        </Typography>
      )}
    </Container>
  );
};

export default Register;
