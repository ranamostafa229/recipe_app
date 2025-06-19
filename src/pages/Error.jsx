import React from "react";
import { useRouteError } from "react-router-dom";
import NotFound from "./NotFound";

const Error = () => {
  const error = useRouteError();
  if (error.response.status === 404) {
    // Render a dedicated Not Found page when a 404 error occurs.
    return <NotFound />;
  }
  return (
    <div className="flex items-center h-[500px] justify-center gap-4 font-bold text-xl">
      <h1>Error: {error.message}</h1>
      <pre>
        {error.response.status} - {error.statusText}
      </pre>
    </div>
  );
};

export default Error;
