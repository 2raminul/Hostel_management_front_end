"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import AppButton from "./components/AppButton";
import AppInputField from "./components/AppInputField";
import { AppLoader } from "./components/AppLoader";
import { loginSchema } from "./schema/form/loginSchema";

export default function Login() {
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [loginError, setLoginError] = useState("");
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async (data: any) => {
    setLoginError("");
    setLoginInProgress(true);
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      //callbackUrl: `https://localhost:3000/members/business`,
      redirect: false,
    });
    if ((response as any)?.error) {
      setLoginError((response as any)?.error);
    } else {
      const session = await getSession();
      console.log(session);
      if (session) {
        router.push("/members/dashboard");
      }
    }
    setLoginInProgress(false);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-primary-100 border-2 rounded-lg w-full m-5 md:w-1/4 shadow-2xl">
        <div className="text-center p-5 bg-primary-100 font-bold text-white">
          Login
        </div>
        <div className="p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <AppInputField
                    labelText="Email"
                    type="text"
                    placeholder="your.name@brac.net"
                    error={!!errors?.email?.message}
                    errorText={errors?.email?.message}
                    {...field}
                    isRequired
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <AppInputField
                    labelText="Password"
                    type="password"
                    placeholder=""
                    error={!!errors?.password?.message}
                    errorText={errors?.password?.message}
                    {...field}
                    isRequired
                  />
                )}
              />
            </div>
            {loginError && <div className="text-error-100">{loginError}</div>}
            <div className="flex my-5 justify-center">
              <AppButton
                variant="contained"
                type="submit"
                startIcon={<LoginIcon />}
                disabled={loginInProgress}
              >
                {loginInProgress ? (
                  <AppLoader small />
                ) : (
                  "Sign In"
                )}
              </AppButton>
            </div>
            <div className="flex my-5 justify-center text-center">
              or &nbsp;
              <Link
                href="/registration"
                className="text-primary-100 hover:underline font-bold"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
