import React, { Dispatch, SetStateAction } from 'react';
import { enableBodyScroll } from 'body-scroll-lock';
import ICard from '../../widgets/cards/types/types';
import './modal.scss';
import Svg from './UI/svg';

const Modal = ({
  active,
  setActive,
  activeCard,
  setActiveCard,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  activeCard: ICard;
  setActiveCard: Dispatch<SetStateAction<ICard | null | undefined>>;
}) => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => {
        setActive(false);
        enableBodyScroll(document.getElementsByTagName('body')[0]);
        setActiveCard(null);
      }}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <Svg setActive={setActive} />
        <div
          className="modal__image"
          style={{ backgroundImage: `url(${activeCard.urls.regular})` }}
        ></div>
        <p>Author: {activeCard.user.username}</p>
        <p>Likes: {activeCard.likes}</p>
        <p>Created at: {new Date(activeCard.created_at).toString().slice(0, -37)}</p>
      </div>
    </div>
  );
};

export default Modal;
