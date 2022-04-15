import * as ReviewsUtil from '../util/reviews_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveAllReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
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
    .then(reviews => dispatch(receiveAllReviews(reviews)))
);

export const removeReview = reviewId => dispatch => (
  ReviewsUtil.deleteReview(reviewId)
    .then(() => dispatch(deleteReview(reviewId)))
);

export const updateReview = (review) => dispatch => (
  ReviewsUtil.updateReview(review)
    .then(reviews => dispatch(receiveAllReviews(reviews)))
);