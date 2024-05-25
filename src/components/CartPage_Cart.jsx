import {
  // Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { addQuantity, removeQuantity, removeToCart,  } from "../Providers/Cart/cartSlice";
import { useState } from "react";

const CartPage_Cart = ({ cart }) => {
  const { name, image } = cart;
  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)
  const handleAddQuantity = () => {
    setQty(qty => qty + 1)
    dispatch(addQuantity(1))
  }
  const handleRemoveQuantity = () => {
    if(qty===1) return
    setQty(qty => qty - 1)
    dispatch(removeQuantity(-1))
  }

  return (
    <div className="cart">
      <Grid item sx={{ margin: "20px" }}>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia sx={{ height: 140 }} image={image?.large} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
              <br />$ {cart?.market_data?.current_price?.usd.toFixed(2)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => dispatch(removeToCart(cart))}>Remove</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button>
              <h3>
                Qty: <Button onClick={handleAddQuantity}>+</Button>
                {qty}
                <Button onClick={handleRemoveQuantity}>-</Button>
                {/* Qty: <Button onClick={() => dispatch(addQuantity(1))}>+</Button>
                {cartQuantity}
                <Button onClick={() => dispatch(removeQuantity(1))}>-</Button> */}
              </h3>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
};

export default CartPage_Cart;
