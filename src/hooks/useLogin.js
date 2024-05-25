import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../Providers/Auth/authServices";
import { setUser } from "../Providers/Auth/authSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const useLogin = () => {
    const dispatch = useDispatch()
    const {reset} = useForm()
    const { mutate, isError, isPending } = useMutation({
      mutationFn: loginUser,
      onSuccess: (data) => {
        reset();
        dispatch(setUser(data));
        toast.success(`Welcome back `);
      },
      onError: () => {
        toast.error(`User Not Found`);
      },
    });

    return { mutate, isError, isPending };
}

export default useLogin
