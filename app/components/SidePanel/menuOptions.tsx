import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from '@mui/icons-material/Category';
import PaidIcon from '@mui/icons-material/Paid';
import EuroIcon from '@mui/icons-material/Euro';
import InventoryIcon from '@mui/icons-material/Inventory';
import { ReactNode } from "react";
import { iconStyles } from "../ThemeRegistry/theme";
import { ActionType } from "../types";

export type MenuOptionType = {
  text: string;
  link: string;
  icon: ReactNode;
  subMenu?: MenuOptionType[];
  permission: Record<string, ActionType>;
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
      expense: { view: true },
    },
  },
  {
    text: "Inventory",
    link: "/members/inventory",
    icon: <InventoryIcon sx={{ ...iconStyles }} />,
    permission: {
      expense: { view: true },
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
export const hasRouteAccess = (
  path: string,
  userPermission: Record<string, ActionType>,
  menuOptions: MenuOptionType[]
): boolean => {
  for (let menuOption of menuOptions) {
    if (menuOption.link === path) {
      return shouldShowMenuOption(menuOption, userPermission);
    }
    // Recursively check subMenu if it exists
    if (menuOption.subMenu) {
      const subMenuHasAccess = hasRouteAccess(
        path,
        userPermission,
        menuOption.subMenu
      );
      if (subMenuHasAccess) {
        return true;
      }
    }
  }
  return false;
};
