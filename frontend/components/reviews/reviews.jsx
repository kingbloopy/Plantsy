import React from "react";
import { useState, useEffect } from "react";
import ReviewItems from "./review_items";

const Reviews = props => {
  let [review, setReview] = useState('');
  let [rating, setRating] = useState('');
  let [errors, setErrors] = useState('');
  
  const generateStars = rating => {
    const stars = [];
    let i = 0;
    while (stars.length !== rating){
      i++;
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      );
    }
    return stars;
  }

  useEffect(() => {
    props.fetchAllReviews(props.productId)
  }, []);

  const handleReview = e => {
    e.preventDefault();
    const rev = {
      reviewer_id: props.currentUserId,
      product_id: props.productId,
      rating: rating,
      content: review
    }
    if (rating) {
      props.createReview(rev);
      setReview('');
    } else {
      setErrors('Please enter a rating before submitting a review')
    }
  }
  
  const update = field => {
    return e => {
      if (field === 'review') {
        setReview(e.target.value);
      } else if (field === 'rating') {
        setErrors('');
        setRating(e.target.value)
      }
    }
  }

  const checkReviews = () => {
    let isReview = true;
    if (props.sellerId === props.currentUserId) isReview = false;
    props.reviews.forEach(review => {
      if (review.reviewer_id === props.currentUserId) isReview = false;
    });
    return isReview;
  }

  const plural = props.reviews.length === 1 ? 'review' : 'reviews'

  return (
    <div className="reviews">
      <div className="reviews__upper-wrapper">
        <h1>{props.reviews.length} {plural}</h1>
        <div className="reviews__star-wrapper">
          {generateStars(Math.round(props.average))}
        </div>
      </div>
        {props.reviews.map((review, idx) => (
          <ReviewItems review={review}
          key={idx}
          currentUserId={props.currentUserId}
          removeReview={props.removeReview}
          updateReview={props.updateReview}
          productId={props.productId}
          />
        ))}
      {props.currentUserId && checkReviews() ? (
      <form onSubmit={handleReview}>
          <div className="stars-rating">
            <input onChange={update('rating')} type="radio" id="star5" name="rating" value="5" />
            <label className="star" htmlFor="star5" title="Awesome" aria-hidden="true"></label>
            <input onChange={update('rating')} type="radio" id="star4" name="rating" value="4" />
            <label className="star" htmlFor="star4" title="Great" aria-hidden="true"></label>
            <input onChange={update('rating')} type="radio" id="star3" name="rating" value="3" />
            <label className="star" htmlFor="star3" title="Very good" aria-hidden="true"></label>
            <input onChange={update('rating')} type="radio" id="star2" name="rating" value="2" />
            <label className="star" htmlFor="star2" title="Good" aria-hidden="true"></label>
            <input onChange={update('rating')} type="radio" id="star1" name="rating" value="1" />
            <label className="star" htmlFor="star1" title="Bad" aria-hidden="true"></label>
          </div>
        <div className="reviews__text-wrapper">
          <textarea onChange={update('review')} value={review} placeholder={`Add a review for ${props.title} . . .`} />
        </div>
        <p className="reviews__errors">{errors}</p>
        <button className="reviews__button" type="submit">Submit Review</button>
      </form>
      ) : (
        null
      )}
    </div>
  );
}

export default Reviews