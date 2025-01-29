import Image from "next/image";
import { FC } from "react";

export const AppLoader: FC<{ small?: boolean }> = ({ small }) => {
  return small ? (
    <Image
      src="/loading.gif"
      alt="Loading..."
      width={25}
      height={25}
      unoptimized
    />
  ) : (
    <div className="w-100 flex justify-center mt-10">
      <Image
        src="/loading.gif"
        alt="Loading..."
        width={150}
        height={150}
        unoptimized
      />
    </div>
  );
};
