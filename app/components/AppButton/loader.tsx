import Image from "next/image";
import { FC } from "react";

export const AppButtonLoader: FC = () => {
  return (
    <Image
      src="/loading_button.gif"
      alt="Loading..."
      width={20}
      height={20}
      unoptimized
    />
  );
};
