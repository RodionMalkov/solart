import React from "react";
import "./styles.scss";

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return <div className={`logo ${className ? className : ""}`}></div>;
};
