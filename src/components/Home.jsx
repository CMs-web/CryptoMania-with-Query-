import CoinsCard from "./CoinsCard";
import Loading from "../ui/Loading";
import { Grid, Typography } from "@mui/material";
import useHome from "../hooks/useHome";

const Home = () => {
 const {coins, isPending, isError} = useHome()

  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return (
      <Typography
        variant="h3"
        margin={"90px 0px 30px 0px"}
        align="center"
        color={"red"}
      >
        something went wrong
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h4" sx={{marginBlock:"20px"}} align="center">
        Top Trending Coins
      </Typography>
      <Grid container spacing={2} alignItems={"center"} padding={"0px 30px"}>
        {coins.map((coin) => (
          <CoinsCard key={coin.item.id} coins={coin} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
