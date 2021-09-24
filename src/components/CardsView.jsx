import React from "react";
import PropTypes from "prop-types";

const CardsView = (props) => {
  let {cards} = props;

  let shopcards  = cards.map((card, index) => {
    return (
      <div key={index} className="shop-card">

          <div className="shop-card__name">{card.name}</div>
          <div className="shop-card__color">{card.color}</div>
          <img className="shop-card__img" src={card.img} alt={card.name} />

          <div className="shop-card__footer">
            <div className="shop-card__price">"$"{card.price}</div>
            <button className="shop-card__btn">Add to cart</button>
          </div>

    </div>
      );
  });


  return <div className="row">{shopcards}</div>

}

export default CardsView;

CardsView.propTypes = {
  cards: PropTypes.array,
};

CardsView.defaultProps = {
  cards: [
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://image.ibb.co/ncULza/1.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://image.ibb.co/hrDPQF/2.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://image.ibb.co/kwdDKa/3.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://image.ibb.co/eWnUsv/4.jpg",
    },
    {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://image.ibb.co/fP2nUa/7.jpg",
    },
    {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://image.ibb.co/ifqwNv/5.jpg",
    },
  ],
};




