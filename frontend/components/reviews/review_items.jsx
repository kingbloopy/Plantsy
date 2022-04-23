import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ReviewItems = props => {
  const review = props.review;
  let [editClass, setEditClass] = useState('hidden');
  let [rating, setRating] = useState(review.rating);
  let [content, setContent] = useState(review.content);
  let [editButton, setEditButton] = useState('reviews__edit');
  let [saveButton, setSaveButton] = useState('hide');
  let [edit, setEdit] = useState(false);

  const generateStars = rating => {
    const stars = [];
    let i = 0;
    while (stars.length !== rating) {
      i++;
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      );
    }
    return stars;
  }

  const properName = name => {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  }

  const update = field => {
    return e => {
      if (field === 'content') {
        setContent(e.target.value);
      } else if (field === 'rating') {
        setRating(e.target.value)
      }
    }
  }

  const handleEdit = () => {
    if (editClass === 'hidden') {
      setEditClass('displayed');
      setEditButton('hide');
      setSaveButton('save-button');
      setEdit(true);
    } else {
      setEdit(false);
      setEditClass('hidden');
      setEditButton('reviews__edit');
      setSaveButton('hide');
      handleSaveEdit();
    }
  }

  const handleSaveEdit = () => {
    const rev = {
      product_id: props.productId,
      rating: rating,
      content: content,
      id: review.id
    }
    props.updateReview(rev);
  }

  return (
    <div className="reviews__wrapper">
      <div className="reviews__wrapper__rating">
        <div>
          <h1 to='/'>{properName(review.reviewer)}</h1>
          <h2>{review.date}</h2>
        </div>
        {props.currentUserId === review.reviewer_id ? (
          <div className="reviews__button-wrappers">
            <button onClick={handleEdit} className={saveButton}>Save changes</button>
            <button onClick={handleEdit} className={editButton}>
              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22px" height="22px"><path d="M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z" /></svg>
            </button>
            <button className="reviews__remove" onClick={() => props.removeReview(review.id)}><svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="26px" height="26px"><path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z" /></svg></button>
          </div>
        ) : (
          null
        )}
      </div>
      {edit ? (
        <div className='edit-rating'>
          <input onChange={update('rating')} type="radio" id="editstar5" name="rating" value="5" />
          <label className="editstar" htmlFor="editstar5" title="Awesome" aria-hidden="true"></label>
          <input onChange={update('rating')} type="radio" id="editstar4" name="rating" value="4" />
          <label className="editstar" htmlFor="editstar4" title="Great" aria-hidden="true"></label>
          <input onChange={update('rating')} type="radio" id="editstar3" name="rating" value="3" />
          <label className="editstar" htmlFor="editstar3" title="Very good" aria-hidden="true"></label>
          <input onChange={update('rating')} type="radio" id="editstar2" name="rating" value="2" />
          <label className="editstar" htmlFor="editstar2" title="Good" aria-hidden="true"></label>
          <input onChange={update('rating')} type="radio" id="editstar1" name="rating" value="1" />
          <label className="editstar" htmlFor="editstar1" title="Bad" aria-hidden="true"></label>
        </div>
      ) : (
      <div className='reviews__star-wrapper'>
        {generateStars(review.rating)}
      </div>
      )}
      {(props.currentUserId === review.reviewer_id) && (editClass === 'displayed') ? (
        <div className={editClass}>
          <textarea onChange={update('content')} value={content} />
        </div>
      ) : (
        <p>{review.content}</p>
      )}
    </div>
  );
}

export default ReviewItems;