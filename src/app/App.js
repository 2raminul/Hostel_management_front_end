"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation
import AdminLayout from './Layout/AdminLayout';
import AuthLayout from './Layout/AuthLayout';
import Index from './Partials/Universal/Dashboard/Index';
import { Provider } from 'react-redux';
import store from './Redux/store'; // Import the Redux store
const App = () => {
  const themeMode = useSelector((state) => state.themeMode.themeMode);
  const themeColor = useSelector((state) => state.theme.themeColor);
  const borderStroke = useSelector((state) => state.stroke.borderStroke);
  const boxLayout = useSelector((state) => state.boxLayout.boxLayout);
  const monochrome = useSelector((state) => state.monochrome.monochrome);
  const borderRadius = useSelector((state) => state.borderRadius.borderRadius);
  const iconColor = useSelector((state) => state.iconColor.iconColor);
  const gradientColor = useSelector((state) => state.gradientColor.gradientColor);

  const pathname = usePathname(); // Use usePathname to get the current route

  const authTitleMapping = {
    "/signin": "Signin",
    "/signup": "Signup",
    "/password-reset": "PasswordReset",
    "/two-step": "TwoStep",
    "/lockscreen": "Lockscreen",
    "/maintenance": "Maintenance",
    "/404": "NoPage",
  };

  const isAuthRoute = authTitleMapping[pathname];

  return (
    <Provider store={store}>
      {isAuthRoute ? (
        <AuthLayout />
      ) : (
        <AdminLayout
          themeMode={themeMode}
          themeColor={themeColor}
          borderStroke={borderStroke}
          boxLayout={boxLayout}
          monochrome={monochrome}
          borderRadius={borderRadius}
          iconColor={iconColor}
          gradientColor={gradientColor}
        >
          {/* Make sure to render the page content here */}
          <Index /> {/* Assuming you want to render Index component here */}
        </AdminLayout>
      )}
   </Provider>
  );
};

export default App;
