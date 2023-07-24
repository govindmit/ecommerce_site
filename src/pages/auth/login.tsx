import React from "react";
import Head from "./head";
import LoginCustomize from "./logincustomize";

export default function Login() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Head
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <LoginCustomize />
    </div>
  );
}
