import React from "react";
import "./styles.scss";

interface Props {
  className?: string;
}

export const StubBlock: React.FC<Props> = ({ className }) => {
  return <div className={`stub-block ${className ? className : ""}`}></div>;
};
