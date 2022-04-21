import React from "react";
import { useState } from "react";
import Reviews from "../reviews/reviews";

const Photos = props => {
  const photos = props.photos;

  let [mainPic, setMainPic] = useState(photos[0]);
  let [index, setIndex] = useState(0);

  const rightClickHandler = e => {
    e.preventDefault();
    let newIndex =
      photos.indexOf(mainPic) + 1 >= photos.length ? (
        0
      ) : (
        photos.indexOf(mainPic) + 1
      );
    setIndex(newIndex)
    setMainPic(photos[newIndex]);
  }

  const leftClickHandler = e => {
    e.preventDefault();
    let newIndex =
      photos.indexOf(mainPic) - 1 < 0 ? (
        photos.length - 1
      ) : (
        photos.indexOf(mainPic) - 1
      );
    setIndex(newIndex)
    setMainPic(photos[newIndex]);
  }

  const pictureHandler = e => {
    setMainPic(e.currentTarget.src);
    setIndex(photos.indexOf(mainPic));
  }

  return (
    <div className="product-pics">
      <div className="product-pics__inner">
        <div className="product-pics__main-pic-wrapper">
          <button className="product-pics__svg-button" id="left-svg-button" onClick={leftClickHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z"></path>
            </svg>
          </button>
          <div className="product-pics__main-picture-wrapper">
            <img className="product-pics__main-picture"
              src={mainPic === undefined ? (
                photos[0]
              ) : (
                mainPic
              )}
            ></img>
          </div>
          <button className="product-pics__svg-button" id="right-svg-button" onClick={rightClickHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z"></path>
            </svg>
          </button>
        </div>
        <ul className="product-pics__small-pics-wrapper">
          {photos.map((photo, idx) => (
            <li key={idx} className="product-pics__small-picture-item">
              <img className="product-pics__small-picture" src={photo} onClick={pictureHandler} />
            </li>
          ))}
        </ul>
      </div>
      <Reviews currentUserId={props.currentUserId} 
      reviews={props.reviews} 
      fetchAllReviews={props.fetchAllReviews} 
      productId={props.productId} 
      createReview={props.createReview}
      updateReview={props.updateReview}
      removeReview={props.removeReview}
      title={props.title}
      average={props.average}
      sellerId={props.sellerId}/>
    </div>
  )
}

export default Photos;