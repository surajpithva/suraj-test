import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { loginSchema } from "../../validations/auth.validation";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../api/authApi";
import { useAuth } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: loginApi,
    onSuccess: (res) => {
      login(res.data);
      toast.success("Login Successful!");
    },
    onError: (err) => {
      alert("Login failed!");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <section className="min-h-screen bg-gray-600 flex items-center justify-center px-4">
      <div className="bg-[#F9F6EE] rounded-2xl p-8 shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <input
              {...register("username")}
              type="text"
              className="w-full border-b border-gray-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              {...register("password")}
              type="password"
              className="w-full border-b border-gray-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-400 hover:text-black text-white py-2 my-6 font-medium transition"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Logging in..." : "Go"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
