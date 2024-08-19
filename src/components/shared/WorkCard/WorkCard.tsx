import React from "react";
import "./styles.scss";

interface Props {
  className?: string;
  work: WorkCard;
}

interface WorkCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const WorkCard: React.FC<Props> = ({ className, work }) => {
  const { id, title, description, image } = work;

  return (
    <article className={`work-card ${className || ""}`}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};
