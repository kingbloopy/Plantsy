import React from "react";
import { connect } from "react-redux";
import { removeProduct } from "../../actions/product_actions";
import { closeModal, openModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";

const DeleteModal = props => {

  const handleDelete = e => {
    e.preventDefault();
    props.removeProduct(props.productId);
    props.closeModal();
    props.history.goBack();
  }

  return (
    <div className="delete-modal">
      <h1>Are you sure you want to delete {props.product?.title}?</h1>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const tempPath = ownProps.location.pathname.split('/');
  const productId = tempPath[tempPath.length - 1];
  return {
    productId,
    product: state.entities.products[productId]
  }
}


export default withRouter(connect(mapStateToProps, { removeProduct, openModal, closeModal })(DeleteModal));