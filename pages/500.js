import React from "react";
import ErrorPage from "components/ErrorPage";

export default function Custom500() {
  return (
    <ErrorPage
      pageTitle="Server Error | Black Women's Suffrage"
      heading="An error occurred."
      body="Thanks for your patience while we work to fix this issue. In the meantime, try one of these:"
    />
  );
}
