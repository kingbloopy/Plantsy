import * as ReviewsUtil from '../util/reviews_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveAllReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const deleteReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const fetchAllReviews = productId => dispatch => (
  ReviewsUtil.fetchAllReviews(productId)
    .then(reviews => dispatch(receiveAllReviews(reviews)))
);

export const createReview = review => dispatch => (
  ReviewsUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
);

export const removeReview = reviewId => dispatch => (
  ReviewsUtil.deleteReview(reviewId)
    .then(() => dispatch(deleteReview(reviewId)))
);

export const updateReview = (review) => dispatch => (
  ReviewsUtil.updateReview(review)
    .then(reviews => dispatch(receiveAllReviews(reviews)))
);