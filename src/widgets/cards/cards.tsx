import React from 'react';
import { BodyScrollOptions, disableBodyScroll } from 'body-scroll-lock';
import { useGetCardsQuery } from '../../processes/store/cardsApi';
import Preloader from '../loader/preloader';
import { useDispatch } from 'react-redux';
import { setCardIdValue } from '../../processes/store/cardIdSlice';

const Cards = ({ ...props }) => {
  const { data, isFetching } = useGetCardsQuery(props.query);
  const dispatch = useDispatch();
  const changeCardIdValue = (id: string) => dispatch(setCardIdValue({ id }));

  const options: BodyScrollOptions = {
    reserveScrollBarGap: true,
  };

  if (isFetching) return <Preloader />;

  return (
    <>
      <div className="cards">
        {data?.results.map(({ description, alt_description, urls, id }, i) => {
          return (
            <div
              role="card"
              data-testid={i.toString()}
              key={i}
              className="card"
              onClick={() => {
                changeCardIdValue(id);
                props.setModalActive(true);
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
    </>
  );
};

export default Cards;
