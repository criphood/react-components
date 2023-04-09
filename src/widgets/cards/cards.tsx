import React, { useEffect, useState } from 'react';
import { BodyScrollOptions, disableBodyScroll } from 'body-scroll-lock';
import getCards from './api/cards-api';
import Preloader from '../loader/preloader';
import Modal from '../modal/modal-window';
import ICard from './types/types';

const Cards = ({ ...props }) => {
  const query = props.query || 'random';
  const url = `https://api.unsplash.com/search/photos?orientation=landscape&per_page=100&query=${query}&client_id=VIfvmKg5fbYxQ8GvhK9wG_2ZUjC7Z6jVs1FkHKdeupY`;
  const [cards, setCards] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [activeCard, setActiveCard] = useState<ICard | null>();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await getCards(url);
      setCards(response.results);
    };

    getData().then(() => setIsLoading(false));
  }, [query, url]);

  const options: BodyScrollOptions = {
    reserveScrollBarGap: true,
  };

  const getDataForModal = async (id: string) => {
    const url = `https://api.unsplash.com/photos/${id}?client_id=VIfvmKg5fbYxQ8GvhK9wG_2ZUjC7Z6jVs1FkHKdeupY`;
    const response = await getCards(url);
    setActiveCard(response);
  };

  return isLoading ? (
    <Preloader />
  ) : (
    <>
      <div className="cards">
        {cards.map(({ description, alt_description, urls, id }, i) => {
          return (
            <div
              role="card"
              data-testid={i.toString()}
              key={i}
              className="card"
              onClick={() => {
                setModalActive(true);
                setIsLoadingModal(true);
                getDataForModal(id).then(() => setIsLoadingModal(false));
                disableBodyScroll(document.getElementsByTagName('body')[0], options);
              }}
            >
              <div
                className="card__picture"
                style={{ backgroundImage: `url(${urls.regular})` }}
              ></div>
              <p className="card__description">{description || alt_description}</p>
            </div>
          );
        })}
      </div>
      {activeCard && (
        <Modal
          active={modalActive}
          setActive={setModalActive}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      )}
      {isLoadingModal && <Preloader />}
    </>
  );
};

export default Cards;
