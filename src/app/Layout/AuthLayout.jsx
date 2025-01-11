"use client";
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Signin from '../Tuning/Pages/Authentication/Signin'; // Adjust paths
import Signup from '../Tuning/Pages/Authentication/Signup';
import PasswordReset from '../Tuning/Pages/Authentication/PasswordReset';
import TwoStep from '../Tuning/Pages/Authentication/TwoStep';
import Lockscreen from '../Tuning/Pages/Authentication/Lockscreen';
import Maintenance from '../Tuning/Pages/Authentication/Maintenance';
import NoPageFound from '../Tuning/Pages/Authentication/NoPageFound';

const AuthLayout = () => {
  const router = useRouter();
  const { pathname } = router;

  const authTitleMapping = {
    "/signin": "Signin",
    "/signup": "Signup",
    "/password-reset": "PasswordReset",
    "/two-step": "TwoStep",
    "/lockscreen": "Lockscreen",
    "/maintenance": "Maintenance",
    "/404": "NoPage",
  };

  const authTitle = authTitleMapping[pathname] || "";
  
  const authComponents = {
    Signin: <Signin />,
    Signup: <Signup />,
    PasswordReset: <PasswordReset />,
    TwoStep: <TwoStep />,
    Lockscreen: <Lockscreen />,
    Maintenance: <Maintenance />,
    NoPage: <NoPageFound />,
  };

  return (
    <div data-ha="theme-PurpleHeart" className="svgstroke-a auth bg-gradient">
      <main className="container-fluid px-0">
        <div className="px-xl-5 px-4 auth-header" data-bs-theme="none">
          <Link href="/index" className="brand-icon text-decoration-none d-flex align-items-center" title="HotelAir Admin Template">
            <span className="fw-bold ps-2 fs-5 text-gradient">HotelAir</span>
          </Link>
        </div>
        {authComponents[authTitle]}
        <footer className="px-xl-5 px-4">
          <p className="mb-0 text-muted">© 2024 <a href="#" target="_blank">HotelAir</a>, All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default AuthLayout;
