import { Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Heading = ({children}) => {
  return (
    <Typography variant="h4" align="center" margin={"30px"} >
      {children}
    </Typography>
  );
}

export default Heading
