import React from "react";
import PropTypes from "prop-types";

const ListView = (props) => {
  let { items } = props;

  const ShopItems = items.map((item, index) => (
    <li key={index}>
      <div className="shop-item">
            <div className="shop-item__img">
              <img src={item.img} alt={item.name}/>
            </div>

            <div className="shop-item__name">{item.name}</div>

            <div className="shop-item__color">{item.color}</div>

            <div className="shop-item__price">"$"{item.price}</div>

            <div className="shop-item__btn">
              <button>"Add to Cart"</button>
            </div>
          </div>
    </li>
  ));

  return <ul className="list-view">{ShopItems}</ul>;
};
export default ListView;

ListView.propTypes = {
  items: PropTypes.array
};

ListView.defaultProps = {
    items: [
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
      ]
  };