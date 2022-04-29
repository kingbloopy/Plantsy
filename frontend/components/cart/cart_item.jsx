import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
    } else if ((month === 4 || month === 6 || month == 9 || month === 11) && day === 30){
      shipDate1 = 1 + randomNum();
      shipDate2 = shipDate1 + 3;
      shipMonth = month + 1;
    } else if (day === 31){
      shipDate1 = 1 + randomNum();
      shipDate2 = shipDate1 + 3;
      shipMonth = month + 1;
    } else if (month === 12 && day === 31){
      shipDate1 = 1 + randomNum();
      shipDate2 = shipDate1 + 3;
      shipMonth = 1;
    } else {
      shipDate1 = day + randomNum();
      shipDate2 = shipDate1 + 3;
      shipMonth = month;
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
      <div className={`${props.cName} cart-item`}>
        <div className="cart-item__seller-info">
          <p>More from this seller</p>
          <Link to={`/shop/${props.item.shop.id}`}>{props.item.shop.name}</Link>
        </div>

        <div className="cart-item__content-wrapper">
          <Link to={`/products/${props.item.product_id}`} className="cart-item__content-wrapper__img-wrapper">
            {/* <img src={window.tester2}/> */}
            <LazyLoadImage src={props.item.photoUrl}/>
          </Link>
          <div className="cart-item__content-wrapper__text-wrapper">
            <div className="cart-item__content-left">
              <Link to={`/products/${props.item.product_id}`}>{props.item.title}</Link>
              <div className="media-wrapper">
                <p className="cart-item__content__quantity">Quantity: <strong>{props.item.quantity}</strong></p>
                <button className="cart-item__content__remove" onClick={() => props.removeCartItem(props.item.id)}>Remove</button>
              </div>

            </div>

            <div className="cart-item__content-right">
              <div>
              <p className="main-price">{priceConvert(props.item.total_price)}</p>
                {props.item.quantity === 1 ? (
                  <p className="small-price"></p>
                ) : (
                  <p className="small-price">({priceConvert(props.item.price)} each)</p>
                )}
              </div>
              <p className="cart-item__content-right__people">
                {peopleNum} {people} this in their cart.
              </p>
              </div>
          </div>
          </div>

          <div className="cart-item__gift-wrapper">

          <label className="container check-wrapper cart-item__gift">This order is a gift
            <input type="checkbox"/>
              <span className="checkmark"></span>
          </label>
            <p>Prices will not be shown on packing slip</p>
          </div>

          <div className="cart-item__extra">
            <div className="text-wrapper">
              <textarea placeholder={`Add a note to ${props.item.shop.name} (optional)`}/>
            </div>
            <p>Estimated delivery: {getShipDate()}</p>
          </div>

      </div>
    );
  } else {
    null;
  }
}

export default CartItem;