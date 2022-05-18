import React from "react";
import NavbarMain from "./navbar";

function Layout({ children }) {
  return (
    <>
      <NavbarMain />
      <main className="mt-5">{children}</main>
    </>
  );
}

export default Layout;
