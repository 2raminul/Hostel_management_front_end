import { FC } from "react";

export const AppFormError: FC<{ text: string; classes: string }> = ({
  text,
  classes,
}) => {
  return (
    <>
      {!!text.length && (
        <div className={`text-error-100 ${classes}`}>{text}</div>
      )}
    </>
  );
};
