import React from "react";
import "./styles.scss";

interface Props {
  className?: string;
  readonly children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={`container ${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
};
