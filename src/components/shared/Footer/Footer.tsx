import React from "react";
import "./styles.scss";
import { SocialList } from "../SocialList/SocialList";
import { StubBlock } from "@/components/temp/StubBlock/StubBlock";

interface Props {
  className?: string;
}

const footerSocial = [
  { href: "https://www.facebook.com", title: "Facebook", icon: "facebook" },
  { href: "https://www.twitter.com", title: "Twitter", icon: "twitter" },
  { href: "https://www.twitter.com", title: "Twitter", icon: "twitter" },
];

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={`footer ${className ? className : ""}`}>
      <div className="footer__wrapper">
        <StubBlock />
        <SocialList socials={footerSocial} />
        <StubBlock />
      </div>
    </footer>
  );
};
