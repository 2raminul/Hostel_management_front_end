import { FC, ReactNode } from "react";

export const AppTableFooter: FC<{ children: ReactNode }> = ({ children }) => {
    return <div className="mt-2 flex flex-col md:flex-row justify-end items-center">
        {children}
    </div>
}