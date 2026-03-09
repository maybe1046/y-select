import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>Dashboard Analytics Layout</div>
      {children}
    </>
  );
};

export default Layout;
