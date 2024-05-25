import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../Providers/Auth/authServices";
import { setUser } from "../Providers/Auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const useRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { reset } = useForm();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      reset();
      dispatch(setUser(data));
      navigate("/");
      toast.success(`Register Successfully`);
    },
    onError: () => toast.error(`User Already Exists`),
  });
    return {mutate,isError,isPending}
};

export default useRegister;
