import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from '@mui/icons-material/Category';
import PaidIcon from '@mui/icons-material/Paid';
import EuroIcon from '@mui/icons-material/Euro';
import InventoryIcon from '@mui/icons-material/Inventory';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SecurityIcon from '@mui/icons-material/Security';
import { ReactNode } from "react";
import { iconStyles } from "../ThemeRegistry/theme";
import { ActionType } from "../types";

export type MenuOptionType = {
  text: string;
  link: string;
  icon: ReactNode;
  subMenu?: MenuOptionType[];
  permission: Record<string, ActionType>;
  /** If true, only users with isAdmin in JWT see this item */
  adminOnly?: boolean;
};
export type MenuOptionProps = {
  text: string;
  link: string;
  icon: ReactNode;
  open: boolean;
  level: number;
  parentText?: string;
  subMenu?: MenuOptionType[];
};

export const AppUserMenuOptions: MenuOptionType[] = [
  {
    text: "Dashboard",
    link: "/members/dashboard",
    icon: <DashboardIcon sx={{ ...iconStyles }} />,
    permission: {
      dashboard: {
        view: true,
      },
    },
  },
  {
    text: "Categories",
    link: "/members/categories",
    icon: <CategoryIcon sx={{ ...iconStyles }} />,
    permission: {
      category: { view: true },
    },
  },
  {
    text: "Expenses",
    link: "/members/expenses",
    icon: <EuroIcon sx={{ ...iconStyles }} />,
    permission: {
      expenses: { view: true },
    },
  },
  {
    text: "Inventory",
    link: "/members/inventory",
    icon: <InventoryIcon sx={{ ...iconStyles }} />,
    permission: {
      inventory: { view: true },
    },
  },
  {
    text: "Income",
    link: "/members/income",
    icon: <PaidIcon sx={{ ...iconStyles }} />,
    permission: {
      income: { view: true },
    },
  },
  {
    text: "Rooms",
    link: "/members/rooms",
    icon: <MeetingRoomIcon sx={{ ...iconStyles }} />,
    permission: {
      rooms: { view: true },
    },
  },
  {
    text: "Settings",
    link: "/members/settings",
    icon: <SettingsIcon sx={{ ...iconStyles }} />,
    permission: {
      settings: { view: true },
    },
  },
  {
    text: "Users",
    link: "/members/users",
    icon: <PeopleIcon sx={{ ...iconStyles }} />,
    permission: {
      users: { view: true },
    },
  },
  {
    text: "Reports",
    link: "/members/reports",
    icon: <AssessmentIcon sx={{ ...iconStyles }} />,
    permission: {
      reports: { view: true },
    },
  },
  {
    text: "Cash position",
    link: "/members/cash-position",
    icon: <AccountBalanceWalletIcon sx={{ ...iconStyles }} />,
    permission: {
      reports: { view: true },
    },
  },
  {
    text: "User access",
    link: "/members/user-access",
    icon: <SecurityIcon sx={{ ...iconStyles }} />,
    permission: {
      users: { view: true },
    },
    adminOnly: true,
  },
];

export const shouldShowMenuOption = (
  option: MenuOptionType,
  userPermission: Record<string, ActionType>
) => {
  const permissionName = Object.keys(option.permission)[0];
  const actionName = Object.keys(option.permission[permissionName])[0];

  return !!(
    userPermission[permissionName] &&
    userPermission[permissionName][actionName as keyof ActionType]
  );
};

/** JWT permissions use view/edit/delete; menu uses view for nav. */
export const canShowNavItem = (
  option: MenuOptionType,
  userPermission: Record<string, ActionType> | undefined,
  isAdmin?: boolean
) => {
  if (option.adminOnly) return !!isAdmin;
  if (!userPermission || !Object.keys(userPermission).length) return false;
  return shouldShowMenuOption(option, userPermission);
};
export const hasRouteAccess = (
  path: string,
  userPermission: Record<string, ActionType>,
  menuOptions: MenuOptionType[],
  isAdmin?: boolean
): boolean => {
  for (const menuOption of menuOptions) {
    if (menuOption.link === path) {
      return canShowNavItem(menuOption, userPermission, isAdmin);
    }
    if (menuOption.subMenu) {
      if (
        hasRouteAccess(path, userPermission, menuOption.subMenu, isAdmin)
      ) {
        return true;
      }
    }
  }
  return false;
};
