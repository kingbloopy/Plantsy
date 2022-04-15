import React from "react";
import { useState, useEffect } from "react";

const Reviews = props => {
  let [review, setReview] = useState('');
  let [rating, setRating] = useState('');
  
  const generateStars = rating => {
    const stars = [];
    while (stars.length !== rating){
      stars.push(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      );
    }
    return stars;
  }

  console.log(generateStars(4));

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

  const plural = props.reviews.length === 1 ? 'review' : 'reviews'

  return (
    <div className="reviews">
      <div>
        <h1>{props.reviews.length} shop {plural}</h1>
        <h2>{generateStars(Math.round(props.average))}</h2>
      </div>
      <div>
        {props.reviews.map((review, idx) => (
          <div key={idx} className="reviews__wrapper">
            <div>
              <h1>{review.reviewer}</h1>
              <h2>{review.date}</h2>
            </div>
            <div className="reviews__star-wrapper">
              {generateStars(review.rating).map(svg => (
                svg
              ))}
            </div>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
      {props.currentUserId ? (
      <form onSubmit={handleReview}>
        <div className="reviews__radio-wrapper">
          <input className="rating-radio" onChange={update('rating')} value='1' type='radio'/>
          <input className="rating-radio" onChange={update('rating')} value='2' type='radio'/>
          <input className="rating-radio" onChange={update('rating')} value='3' type='radio'/>
          <input className="rating-radio" onChange={update('rating')} value='4' type='radio'/>
          <input className="rating-radio" onChange={update('rating')} value='5' type='radio'/>
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