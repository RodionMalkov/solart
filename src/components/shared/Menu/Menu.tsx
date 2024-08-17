import React from "react";
import "./styles.scss";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Menu: React.FC<Props> = ({ className }) => {
  return (
    <nav className={`menu ${className ? "className" : ""}`}>
      <ul className="menu__list">
        <Link className="menu__link" href="/">
          Иллюстрации
        </Link>
        <Link className="menu__link" href="/about">
          Обо мне
        </Link>
      </ul>
    </nav>
  );
};
