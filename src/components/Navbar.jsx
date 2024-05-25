import { Avatar, Badge, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../Providers/Auth/authSlice";
import Nav from "../ui/Nav";
import Button from "../ui/Button";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const nevigate = useNavigate();
  const dispatch = useDispatch();

const { cartitems } = useSelector((state) => state.cart);


  const handleLogOut = () => {
    nevigate("/");
    dispatch(logOutUser());
  };

  return (
    <Nav>
      <Typography variant="h5" sx={{ flexGrow: "1" }}>
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          CryptoMania
        </Link>
      </Typography>

      {!user ? (
        <Box>
          <Link to={"/login"}>
            <Button>Login</Button>
          </Link>
          <Link to={"/register"}>
            <Button>Register</Button>
          </Link>
        </Box>
      ) : (
        <>
          <Avatar
            sx={{color:"white", marginRight: "10px" }}
            sizes="small"
          >
            {user.name[0]}
          </Avatar>

          <Link to="/cart">
            <Badge badgeContent={cartitems.length} color="secondary">
              <Button>Cart</Button>
            </Badge>
          </Link>
          <Button onClick={handleLogOut}>Logout</Button>
        </>
      )}
    </Nav>
  );
};

export default Navbar;
