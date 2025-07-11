import React from "react";

const Container = ({ className, children }) => {
  return <div className={`${className} max-w-[100rem] m-auto`}>{children}</div>;
};

export default Container;
