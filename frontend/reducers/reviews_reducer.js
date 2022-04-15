import { RECEIVE_ALL_REVIEWS, REMOVE_REVIEW } from "../actions/reviews_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type){
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case REMOVE_REVIEW:
      delete nextState[action.reviewId];
      return nextState;
    default:
      return state;
  }
}

export default reviewsReducer;