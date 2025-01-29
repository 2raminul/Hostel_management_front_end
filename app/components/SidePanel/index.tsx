"use client";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import List from "@mui/material/List";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import { usePathname, useRouter } from "next/navigation";
import { FC, ReactNode, useEffect, useState } from "react";

import { MenuOption } from "./MenuOption";
import {
  AppUserMenuOptions,
  hasRouteAccess,
  shouldShowMenuOption,
} from "./menuOptions";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { signOut } from "next-auth/react";
import { AppLogo } from "../AppLogo";
import { getDecodedTokenData } from "@/app/utils/helpers";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(8)} + 1px)`,
  /*
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },*/
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const AppDrawer: FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [userData, setUserData] = useState({});
  const getUserData = async () => {
    const decodedUserData = await getDecodedTokenData();
    setUserData(decodedUserData);
  }

  const path = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (!Object.keys(userData)?.length) {
      console.log('setting up')
      getUserData();
    }
  }, [userData]);
  /*
  useEffect(() => {
    if (userData) {
      if (!userData.passwordResetted) {
        router.push("/members/initial-password-reset");
        return;
      }
      if (hasRouteAccess(path, userData["permissions"], AppUserMenuOptions)) {
        setAuthorized(true);
      } else {
        router.push("/unauthorized");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, userData]);*/

  const logUserOut = async () => await signOut({ redirect: false });

  const trimFooterText = (text: string) =>
    text?.length > 17 ? text.substring(0, 17) + "..." : text;

  return (
    <Box sx={{ display: "flex" }}>
      {// userData?.passwordResetted
        true && (
          <Drawer
            variant="permanent"
            open={open}
            sx={{
              "& .MuiDrawer-paper": {
                overflow: "visible", // Ensures content outside the Drawer is visible
              },
              boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            }}
          >
            <DrawerHeader
              sx={{
                justifyContent: "flex-start",
                marginLeft: "15px",
                position: "relative",
              }}
            >
              <AppLogo />
            </DrawerHeader>
            <div
              className="cursor-pointer absolute top-10 p-1 left-full -translate-x-1/2 -translate-y-1/2  z-50 bg-white rounded-full shadow-md"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <ArrowLeftIcon
                  sx={{
                    color: "gray",
                  }}
                />
              ) : (
                <ArrowLeftIcon
                  sx={{
                    color: "gray",
                    transform: "rotate(180deg)",
                    transition: "transform 0.5s ease",
                  }}
                />
              )}
            </div>
            <Divider />
            <List>
              {AppUserMenuOptions.filter((option) =>
                true // shouldShowMenuOption(option, userData["permissions"])
              ).map((option) => (
                <MenuOption
                  text={option.text}
                  link={option.link}
                  icon={option.icon}
                  open={open}
                  key={option.text}
                  subMenu={option.subMenu?.filter((o) =>
                    true // shouldShowMenuOption(o, userData["permissions"])
                  )}
                  parentText={option.text}
                  level={0}
                />
              ))}
            </List>
            <Box
              sx={{
                borderTop: "1px solid #ccc",
                marginTop: "auto",
                padding: 2,
                textAlign: "center",
              }}
            >
              {open && (
                <div className="float-left">
                  <IconButton size="small">
                    <Avatar />
                  </IconButton>
                </div>
              )}
              {open && !!(userData as any).name && (
                <div className="float-left">
                  <div className="font-bold text-left">
                    <Tooltip title={(userData as any).name}>
                      <>{trimFooterText((userData as any).name)}</>
                    </Tooltip>
                  </div>
                </div>
              )}
              <div className="clear-both" />
              {open && <div className="mt-5" />}
              <span
                className="text-primary-100 underline cursor-pointer border-0 hover:bg-primary-150 p-2 rounded-md"
                onClick={logUserOut}
              >
                <LogoutIcon /> {open && <>Logout</>}
              </span>
            </Box>
          </Drawer>
        )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DrawerHeader />
        <div className="content-center w-full mr-5">
          {//authorized && 
            children
          }
        </div>
      </Box>
    </Box>
  );
};
