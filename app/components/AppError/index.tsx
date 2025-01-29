import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import Link from "next/link";
import { FC } from "react";

const AppError: FC<{ statusCode: number; message: string }> = ({
  statusCode,
  message,
}) => {
  return (
    <>
      <ReportProblemIcon
        sx={{ color: "primary.main", width: 100, height: 100 }}
      />
      <span className="font-bold mr-2">
        {statusCode ? statusCode : "UNKNOWN"}
      </span>
      <span className="font-bold">
        {message ? message : "Unknown error occurred"}
      </span>
      <div className="text-center">
        Go to{" "}
        <Link href={"/members/dashboard"}>
          <span className="text-primary-100 font-bold">Dashboard</span>
        </Link>
      </div>
    </>
  );
};

export default AppError;
