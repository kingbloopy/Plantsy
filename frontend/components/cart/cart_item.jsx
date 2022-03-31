import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CartItem = props => {

  const randomNum = () => {
    const min = 1;
    const max = props.item.available + 1;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const peopleNum = randomNum();

  const people = peopleNum === 1 ? 'person has' : 'people have';

  const getShipDate = () => {
    const months = {
      1: 'Jan',
      2: 'Feb',
      3: 'Mar',
      4: 'Apr',
      5: 'May',
      6: 'Jun',
      7: 'Jul',
      8: 'Aug',
      9: 'Sep',
      10: 'Oct',
      11: 'Nov',
      12: 'Dec'
    }
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    let shipDate1;
    let shipDate2;
    let shipMonth;
    if (month === 2 && day === 28){
      shipDate1 = 1 + randomNum();
      shipDate2 = shipDate1 + 3;
      shipMonth = month + 1;
    }
    if ((month === 4 || month === 6 || month == 9 || month === 11) && day === 30){
      shipDate1 = 1 + randomNum();
      shipDate2 = shipDate1 + 3;
      shipMonth = month + 1;
    } if (day === 30){
      shipDate1 = 1 + randomNum();
      shipDate2 = shipDate1 + 3;
      shipMonth = month + 1;
    }
    if (month === 12 && day === 30){
      shipDate1 = 1 + randomNum();
      shipDate2 = shipDate1 + 3;
      shipMonth = 1;
    }
    return `${months[shipMonth]} ${shipDate1}-${months[shipMonth]} ${shipDate2}`
  }

  const priceConvert = num => {
    const n = num.toString();
    if ((n.split('.')[1].length) < 2) {
      return `$${n}0`;
    } else {
      return `$${n}`;
    }
  }

  if (props.item){
    return (
      <div className="cart-item">
        <div className="cart-item__seller-info">
          <p>More from this seller</p>
          <Link to="null">{props.item.shop.name}</Link>
        </div>

        <div className="cart-item__content-wrapper">
          <div className="cart-item__content-wrapper__img-wrapper">
            <img src={props.item.photoUrl}/>
          </div>
          <div className="cart-item__content-left">
            <Link to={`/products/${props.item.product_id}`}>{props.item.title}</Link>
            <p className="cart-item__content__quantity">{props.item.quantity}</p>
            <button className="cart-item__content__remove" onClick={() => props.removeCartItem(props.item.id)}>Remove</button>
          </div>

          <div className="cart-item__content-right">
            <p className="cart-item__content-right__main-price">{priceConvert(props.item.total_price)}</p>
              {props.item.quantity === 1 ? (
                <p className="cart-item__content-right__small-price"></p>
              ) : (
                <p className="cart-item__content-right__small-price">({priceConvert(props.item.price)} each)</p>
              )}
            <p className="cart-item__content-right__people">
              {peopleNum} {people} this in their cart.
            </p>
            </div>
          </div>

          <div className="cart-item__gift-wrapper">
          <label className="cart-item__gift">This order is a gift
            <input type="checkbox"/>
          </label>
            <p>Prices will not be shown on packing slip</p>
          </div>

          <div className="cart-item__extra">
            <textarea/>
            <p>Estimated delivery: {getShipDate()}</p>
          </div>

      </div>
    );
  } else {
    null;
  }
}

export default CartItem;