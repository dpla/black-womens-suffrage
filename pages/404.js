import React from "react";
import ErrorPage from "components/ErrorPage";

export default function Custom404() {
  return (
    <ErrorPage
      pageTitle="Page Not Found | Black Women's Suffrage"
      heading="Page not found."
      body="We're sorry, the page you requested cannot be found. Try one of these instead:"
    />
  );
}
