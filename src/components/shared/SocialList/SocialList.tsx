import React from "react";
import "./styles.scss";

interface Social {
  href: string;
  title: string;
  icon: string;
}

interface Props {
  className?: string;
  socials: Social[];
}

export const SocialList: React.FC<Props> = ({ className, socials }) => {
  return (
    <ul className={`social-list ${className ? className : ""}`}>
      {socials.map(({ href, title, icon }, index) => (
        <li key={index} className="social-list__item">
          <a
            className={`social-list__link icon--${icon}`}
            href={href}
            target="_blank"
            rel="noreferrer"
            title={title}
          >
            <svg
              width="34"
              height="31"
              viewBox="0 0 34 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.49815 0.984558C4.43548 0.984558 0.331482 5.0879 0.331482 10.1512C0.331482 15.4579 3.35398 20.4646 8.35232 25.0479C10.0583 26.6113 11.8952 27.9829 13.7168 29.2146C14.3553 29.6446 14.9525 30.0346 15.4878 30.3596C15.8142 30.558 16.0293 30.7013 16.1648 30.7763C16.6682 31.0563 17.3282 31.0563 17.8315 30.7763C17.967 30.7013 18.1822 30.558 18.5085 30.3596C19.0438 30.0346 19.641 29.6446 20.2795 29.2146C22.1012 27.9829 23.938 26.6113 25.644 25.0479C30.6423 20.4646 33.6648 15.4579 33.6648 10.1512C33.6648 5.0879 29.5608 0.984558 24.4982 0.984558C21.6228 0.984558 18.8155 2.55125 17.0502 4.83792C15.3288 2.51125 12.5313 0.984558 9.49815 0.984558Z"
                fill="#2A343D"
              />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};
