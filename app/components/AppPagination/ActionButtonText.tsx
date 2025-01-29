import { FC, ReactNode } from "react";

export const ActionButtonText: FC<{ first: boolean; children: ReactNode }> = ({
  first,
  children,
}) => {
  return (
    <span
      className={`${first ? "ml-1.5" : "mr-1.5"} text-gray-100 
  font-bold 
  text-sm`}
    >
      {children}
    </span>
  );
};
