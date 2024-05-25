import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../ui/Loading";
import { useMutation } from "@tanstack/react-query";
import { fetchSingleCoin } from "../Providers/Coins/coinsServices";
import { addToCart } from "../Providers/Cart/cartSlice";

const LernMore = () => {
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const {
    data: singleCoin,
    mutate,
    isPending,
    isError,
  } = useMutation({
    mutationFn: fetchSingleCoin,
    onSuccess: (data) => {
      return data;
    },
  });

  useEffect(() => {
    if (user) {
      mutate(id);
    } else {
      return navigate("/login");
    }
  }, [id, mutate, navigate, user]);

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ marginTop: "90px" }}
      >
        Error..
      </Typography>
    );
  }
  return (
    <Card sx={{ marginTop: "90px", marginInline: "8vw" }}>
      <CardMedia
        sx={{ height: 340 }}
        image={singleCoin?.image?.large}
        title={singleCoin?.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {singleCoin?.name}
        </Typography>
        <Typography variant="h5" color="text.primary">
          Current Price : ${singleCoin?.market_data.current_price.usd}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {singleCoin?.description.en}
        </Typography>
        <Button
          variant="outlined"
          sx={{ marginTop: "20px" }}
          onClick={() => navigate("/")}
          startIcon={<KeyboardBackspaceIcon />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{ marginLeft: "20px", marginTop: "20px" }}
          onClick={() => dispatch(addToCart(singleCoin))}
          
        >
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default LernMore;
