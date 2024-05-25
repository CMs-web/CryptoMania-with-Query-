import LoginIcon from "@mui/icons-material/Login";
import { LoadingButton } from "@mui/lab";

// eslint-disable-next-line react/prop-types
const AuthButton = ({isPending , children}) => {
  return (
    <LoadingButton
      loading={isPending}
      loadingPosition="end"
      variant="contained"
      color="success"
      type="submit"
      size="small"
      endIcon={<LoginIcon />}
      sx={{ marginTop: "10px" }}
    >
      {children}
    </LoadingButton>
  );
}

export default AuthButton
