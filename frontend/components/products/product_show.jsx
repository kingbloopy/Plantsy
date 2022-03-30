import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Photos from "./photos";
import { checkForCartItem } from "../../util/cart_selectors";

const ProductShow = props => {
  const { product, currentUser, cart, maxQuantity } = props;
  let [count, setCount] = useState(1);
  let [currentMax, setCurrentMax] = useState(maxQuantity);

  // let currentMax;
  // if (product) currentMax = product.quantity;

  // let currentMax;
  // if (product) currentMax = useRef(product.quantity);

  // useEffect(() => {
  //   currentMax.current = currentMax.current - count;
  // });
  
  useEffect(() => {
    props.fetchProduct(props.match.params.productId);
    setCurrentMax(maxQuantity);
  }, []);

  const decimalCount = num => {
    const n = num.toString();
    return (n.split('.')[1].length) < 2
  }

  const increment = () => {
    if (count >= currentMax) return;
    setCount(count += 1);
  }

  const decrement = () => {
    if (count <= 1) return;
    setCount(count -= 1);
  }

  const addItemHandleClick = e => {
    e.preventDefault();

    // if (currentUser){
    //   const item = checkForCartItem(cart, product.id);
    //     console.log('ITEM EXISTS', item);
    //     const cartItem = {id: item.id, product_id: product.id, user_id: currentUser.id, quantity: count }

    //     setCurrentMax(currentMax -= count);

    //   item ? props.updateCartItem(cartItem, true) : props.addCartItem(cartItem);
    // } else {
    //   props.openModal('login');
    // }

    if (currentUser){
      const id = checkForCartItem(cart, product.id);
      const cartItem = {id: id, product_id: product.id, user_id: currentUser.id, quantity: count }

      console.log('ITEM EXISTS', id);

      // console.log('CURRENTMAX1', currentMax);
      // console.log('COUNT1', count);
      // currentMax -= count;
      console.log('CURRENTMAX', currentMax);
      console.log('MAX', maxQuantity);
      console.log('COUNT', count);

      setCurrentMax(currentMax -= count);

      id ? props.updateCartItem(cartItem, true) : props.addCartItem(cartItem);
    } else {
      props.openModal('login');
    }

  }

  // const getCurrentQuantity = () => {
  //   if (currentUser){
  //     debugger
  //     const item = checkForCartItem(cart, product.id);
  //     // console.log('CART', cart);
  //     // console.log('PRODUCT-ID', product.id);
  //     // console.log('ITEM', item);
  //     if (item) {
  //       return item.quantity
  //     } else {
  //       return 0;
  //     }
  //   }
  // }
  
  
  if (props.product) {
    // const max = product.quantity;
    // console.log('MAX', max);
    // max = product.quantity;

    let outOfStock;
    let addCart;
    if (currentMax <= 0) {
    // if (count >= max) {
    // if (getCurrentQuantity() >= max) {
      addCart = null;
      outOfStock = "__out-of-stock"
    } else {
      addCart = addItemHandleClick
      outOfStock = "";
    }

    return(
      <div className="product-show">
  
        <Photos photos={[window.tester1, window.tester2]} />
        {/* <Photos photos={product.photoURLs} /> */}
  
        <div className="product-show__product-info">
          <div className="product-show__seller-info">
            <Link to="#" className="product-show__seller-info__shop">{product.shop}</Link>
            {product.sales ? (
              <p>{product.sales} sales</p>
              ): (
              <p>0 sales</p>
            )}
          </div>

          <h1 className="product-show__title">{product.title}</h1>
          <div className="product-show__in-stock">
            <p>In stock</p>
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px"><path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z" /></svg>
          </div>

          <div className="product-show__pq-wrapper">
          {decimalCount(product.price) ? (
            <p className="product-show__price">${product.price}0</p>
          ) : (
            <p className="product-show__price">${product.price}</p>
          )}

            <div className="product-show__quantity-wrapper">
              <p>Quantity:</p>
              <div className="quantity-counter">
                <button type="button" onClick={decrement}>&minus;</button>
                <span>{count}</span>
                <button type="button" onClick={increment}>&#43;</button>
              </div>
            </div>
          </div>

          <button type="button" className={`product-show__add-cart${outOfStock}`} onClick={addCart}>Add to cart</button>
          <div className="product-show__d-wrapper">
            <h4>Description</h4>
            <p className="product-show__body">{product.description}</p>
          </div>
          <p className="product-show__time">{product.date}</p>
        </div>
  
      </div>
    );
  } else {
    return null;
  }
}

export default ProductShow;