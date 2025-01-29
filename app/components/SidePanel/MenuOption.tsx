"use client";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";

import { useDispatch, useSelector } from "../../store/hooks";

import { MenuOptionProps } from "./menuOptions";
import { setExpandedParentText } from "@/app/store/reducer/snackbar/menu";

export const MenuOption: FC<MenuOptionProps> = ({
  text,
  link,
  icon,
  open,
  parentText,
  level,
  subMenu,
}) => {
  const path = usePathname();
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.menuReducer);
  return (
    <ListItem disablePadding component="div" sx={{ display: "block" }}>
      <Link
        href={link}
        onClick={(e) => (link == "dummy" ? e.preventDefault() : null)}
      >
        {!open &&
          (text == selector.expandedParentText ||
            parentText == selector.expandedParentText) && (
            <div className="bg-primary-150 w-2 float-left h-12" />
          )}
        {open && path == link && (
          <div className="p-1 bg-primary-100 float-left min-h-12" />
        )}
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5 + level,
            backgroundColor: path == link ? "#D10D7426" : "inherit",
          }}
          onClick={() => {
            if (level == 0) {
              dispatch(setExpandedParentText(text));
              setExpanded(!expanded);
            }
          }}
        >
          <Tooltip title={text}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <span className={`${path == link ? "text-primary-100" : ""}`}>
                {icon}
              </span>
            </ListItemIcon>
          </Tooltip>
          <ListItemText
            primary={text}
            sx={{
              opacity: open ? 1 : 0,
              color: path == link ? "#D10D74" : "inherit",
              "& .MuiListItemText-primary": {
                fontWeight: path == link ? "bold" : "normal",
              },
            }}
          />
          {subMenu &&
            open &&
            (expanded ? (
              <ArrowDropDownIcon
                sx={{
                  transform: "rotate(180deg)",
                  transition: "transform 0.5s ease",
                }}
              />
            ) : (
              <ArrowDropDownIcon
                sx={{
                  transition: "transform 0.5s ease",
                }}
              />
            ))}
        </ListItemButton>
      </Link>
      {subMenu && (
        <Collapse in={expanded && text == selector.expandedParentText}>
          {subMenu.map((option) => (
            <MenuOption
              text={option.text}
              parentText={text}
              link={option.link}
              icon={option.icon}
              open={open}
              key={option.text}
              level={level + 1}
              subMenu={option.subMenu}
            />
          ))}
        </Collapse>
      )}
    </ListItem>
  );
};
