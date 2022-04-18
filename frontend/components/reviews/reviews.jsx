import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Reviews = props => {
  let [review, setReview] = useState('');
  let [rating, setRating] = useState('');
  
  const generateStars = rating => {
    const stars = [];
    let i = 0;
    while (stars.length !== rating){
      i++;
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
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
    props.createReview(rev);
  }

  const update = field => {
    return e => {
      if (field === 'review') {
        setReview(e.target.value);
      } else if (field === 'rating') {
        setRating(e.target.value)
      }
    }
  }

  const getAvg = () => {
    let total = 0;
    props.reviews.forEach(review => total += review.rating);
    return Math.round(total/props.reviews.length);
  }

  const properName = name => {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
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
          <div key={idx} className="reviews__wrapper">
            <div className="reviews__wrapper__rating">
              <div>
                <Link to='/'>{properName(review.reviewer)}</Link>
                <h2>{review.date}</h2>
              </div>
              {props.currentUserId === review.reviewer_id ? (
                <button onClick={() => props.removeReview(review.id)}>Remove</button>
              ) : (
                null
              )}
            </div>
            <div className="reviews__star-wrapper">
              {generateStars(review.rating)}
            </div>
            <p>{review.content}</p>
          </div>
        ))}
      {props.currentUserId ? (
      <form onSubmit={handleReview}>
        <div className="reviews__radio-wrapper">
          <input className="rating-radio" onChange={update('rating')} value='1' name="star" type='radio'/>
          <input className="rating-radio" onChange={update('rating')} value='2' name="star" type='radio'/>
          <input className="rating-radio" onChange={update('rating')} value='3' name="star" type='radio'/>
          <input className="rating-radio" onChange={update('rating')} value='4' name="star" type='radio'/>
          <input className="rating-radio" onChange={update('rating')} value='5' name="star" type='radio'/>
        </div>
        <div className="reviews__text-wrapper">
          <textarea onChange={update('review')} value={review} placeholder={`Add a review for ${props.title}`} />
        </div>
        <button type="submit">Submit Review</button>
      </form>
      ) : (
        null
      )}
    </div>
  );
}

export default Reviews