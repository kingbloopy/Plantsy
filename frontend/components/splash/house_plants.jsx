import React from "react";
import { connect } from "react-redux";
import { fetchByCategory } from "../../actions/product_actions";

const HousePlants = props => {

  useEffect(() => {
    props.fetchByCategory(searchCategory);
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="category-index">
      <div className="category-index__info-wrapper">
        <h1>{category}</h1>
        <h2>{categoryInfo}</h2>
      </div>
      <div className="category-index__ul-wrapper">
        <ul className="category-index__items-wrapper">
          {props.products.map((item, idx) => (
            <li key={idx}>
              <CategoryItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// const mapStateToProps = { entitities } => ({
//   products: entitities.products
// })

export default connect(null, { fetchByCategory })(HousePlants);

