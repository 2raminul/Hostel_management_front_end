import Image from "next/image";
import { FC } from "react";

export const AppLogo: FC = () => {
    return <Image
        src="/portu.png"
        alt="Loading..."
        width={20}
        height={20}
        unoptimized
    />
}