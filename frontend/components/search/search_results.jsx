import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import Spinner from "../misc/spinner";
import { fetchAllProducts } from "../../actions/product_actions";
import CategoryItem from "../products/category_index/category_item";
import { useLocation } from "react-router-dom";


const SearchResults = props => {
  const location = useLocation();
  const searchValue = location.pathname.split('/')[2];

  useEffect(() => {
    props.fetchAllProducts();
  }, []);

  let products;
  if (props && props.products){
    products = props.products.filter(product => product.title.toLowerCase()
    .includes(searchValue.toLowerCase()) || product.description.toLowerCase().includes(searchValue.toLowerCase()))
  }

  if (props.products && props.products[props.products.length - 1]) {
    return (
    <div className="category-index">
      <div className="category-index__inner">
        {products.length !== 0 ? (
          <div className="category-index__info-wrapper">
            <h1>
              Search results for {searchValue}
            </h1>
          </div>
        ) : (
            <div className="category-index__info-wrapper">
              <h1>
                Sorry, We couldn't find any results for {searchValue}
              </h1>
            <h2>Try searching for something else instead?</h2>
          </div>
        )}
        <div className="category-index__ul-wrapper">
          <ul className="category-index__items-wrapper">
            {products.map((item, idx) => (
              <li key={idx}>
                <CategoryItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    )
  } else if (!props || props.location.searchResult){
    return null
  } else {
    return (
    <Spinner/>
    )
  }
}

const mapStateToProps = state => ({
  products: Object.values(state.entities.products)
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);