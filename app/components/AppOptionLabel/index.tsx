import { FC } from "react";

export const AppOptionLabel: FC<{
  text: string;
  isRequired?: boolean;
}> = ({ text, isRequired }) => {
  return (
    <div className="mt-5 whitespace-nowrap">
      <div className="font-bold float-left mb-[15px] whitespace-nowrap">
        {text}
        {isRequired && <span className="text-primary-100"> *</span>}
      </div>
      <div className="clear-both" />
    </div>
  );
};
