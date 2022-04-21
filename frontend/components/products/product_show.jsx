import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Photos from "./photos";
import { checkForCartItem } from "../../util/cart_selectors";

const ProductShow = props => {
  const { product, currentUser, cart, maxQuantity } = props;
  let [count, setCount] = useState(1);
  
  let [currentMax, setCurrentMax] = useState(maxQuantity);

  useEffect(() => {
    props.fetchProduct(props.match.params.productId);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setCurrentMax(maxQuantity);
  }, [maxQuantity]);

  useEffect(() => {
    if (currentMax <= 0) {
      setCount(0);
    } else {
      setCount(1);
    }
  }, [currentMax]);

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

    if (currentUser){
      const id = checkForCartItem(cart, product.id);
      const cartItem = {id: id, product_id: product.id, user_id: currentUser.id, quantity: count }

      setCurrentMax(currentMax -= count);

      id ? props.updateCartItem(cartItem, true) : props.addCartItem(cartItem);
    } else {
      props.openModal('login');
    }

  }
  
  if (product) {

    let outOfStock;
    let addCart;
    if (currentMax <= 0) {
      addCart = null;
      outOfStock = "__out-of-stock"
    } else {
      addCart = addItemHandleClick
      outOfStock = "";
    }

    const handleDelete = e => {
      e.preventDefault();
      props.openModal('delete-product');
    }

    return(
      <div className="product-show">
        <div className="product-show__inner">
          <Photos 
          productId={product.id} 
          currentUserId={props.currentUserId} 
          reviews={props.reviews} 
          fetchAllReviews={props.fetchAllReviews} 
          photos={[window.tester1, window.tester2]} 
          createReview={props.createReview}
          updateReview={props.updateReview}
          removeReview={props.removeReview}
          title={product.title}
          sellerId={product.sellerId}
          average={product.averageRating}/>
          {/* <Photos 
          productId={product.id} 
          currentUserId={props.currentUserId} 
          reviews={props.reviews} 
          fetchAllReviews={props.fetchAllReviews} 
          createReview={props.createReview}
          updateReview={props.updateReview}
          removeReview={props.removeReview}
          photos={product.photoURLs}
          title={product.title}
          sellerId={product.sellerId}
          average={product.averageRating}/> */}
    
          <div className="product-show__product-info">
            <div className="product-show__seller-info">
              <Link to={`/shop/${product.shopId}`} className="product-show__seller-info__shop">{product.shop}</Link>
              {product.sales ? (
                <p>{product.sales} sales</p>
                ): (
                <p>0 sales</p>
              )}
            </div>

            <h1 className="product-show__title">{product.title}</h1>
            {currentMax > 2 ? (
            <div className="product-show__in-stock">
              <p>In stock</p>
              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px"><path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z" /></svg>
            </div>
            ) : (
            <div className="product-show__low-stock">
              <p>Low in stock</p>
            </div>
            )}

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

            <div className="product-show__add-wrapper">
              <button type="button" className={`product-show__add-cart${outOfStock}`} onClick={addCart}>Add to cart</button>
            </div>
            <div className="product-show__d-wrapper">
              <h4>Description</h4>
              <p className="product-show__body">{product.description}</p>
            </div>
            {props.currentUserId === product.sellerId ? (
              <div className="delete-product-wrapper">
                <button className="reviews__remove product-delete" onClick={handleDelete}><svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="40px" height="40px"><path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z" /></svg></button>
              </div>
            ) : (
              null
            )}
          </div>

        </div>
  
        <p className="product-show__time">{product.date}</p>
  
      </div>
    );
  } else {
    return null;
  }
}

export default ProductShow;