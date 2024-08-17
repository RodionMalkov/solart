import React from "react";
import "./styles.scss";

import { Menu } from "../Menu/Menu";
import { Logo } from "../Logo/Logo";
import { SocialList } from "../SocialList/SocialList";

interface Props {
  className?: string;
}

const headerSocial = [
  { href: "https://www.facebook.com", title: "Facebook", icon: "facebook" },
  { href: "https://www.twitter.com", title: "Twitter", icon: "twitter" },
  { href: "https://www.twitter.com", title: "Twitter", icon: "twitter" },
];

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={`header ${className ? className : ""}`}>
      <div className="header__wrapper">
        <Logo />
        <Menu />
        <SocialList socials={headerSocial} />
      </div>
    </header>
  );
};
