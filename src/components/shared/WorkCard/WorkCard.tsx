import React, { useState } from "react";
import "./styles.scss";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

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

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <article onClick={onOpenModal} className={`work-card ${className || ""}`}>
        <img src={image} alt={title} />
      </article>
      <Modal open={open} onClose={onCloseModal} center>
        <h3>{title}</h3>
        <p>{description}</p>
      </Modal>
    </>
  );
};
