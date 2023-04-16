import React, { Dispatch, SetStateAction } from 'react';
import { enableBodyScroll } from 'body-scroll-lock';
import './modal.scss';
import Svg from './UI/svg';
import Preloader from '../../entities/loader/preloader';
import { useGetCardModalQuery } from '../../processes/store/cardsApi';
import { useSelector } from 'react-redux';

interface CardId {
  cardId: { cardId: string };
}

const Modal = ({
  active,
  setModalActive,
}: {
  active: boolean;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}) => {
  const cardIdValue = useSelector((state: CardId) => state.cardId.cardId);

  const { data, isFetching } = useGetCardModalQuery(cardIdValue);

  if (isFetching) return <Preloader />;

  return (
    <div
      className={active ? 'modal active' : 'modal'}
      data-testid="modal"
      onClick={() => {
        setModalActive(false);
        enableBodyScroll(document.getElementsByTagName('body')[0]);
      }}
    >
      {data && data.id && (
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <Svg setModalActive={setModalActive} />
          <div
            className="modal__image"
            style={{ backgroundImage: `url(${data.urls.regular})` }}
          ></div>
          <p>Author: {data.user.username}</p>
          <p>Likes: {data.likes}</p>
          <p>Created at: {new Date(data.created_at).toString().slice(0, -37)}</p>
        </div>
      )}
    </div>
  );
};

export default Modal;
