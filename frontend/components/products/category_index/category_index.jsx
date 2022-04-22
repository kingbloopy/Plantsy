import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CategoryItem from "./category_item";
import Spinner from '../../misc/spinner';

const CategoryIndex = props => {
  const location = useLocation();
  const path = location.pathname;

  let searchCategory;
  let categoryInfo;

  switch(path){
    case '/bromeliads':
      searchCategory = 'Bromeliad';
      categoryInfo = 'The Bromeliaceae is a family of monocot flowering plants of 75 genera and around 3590 known species native mainly to the tropical Americas, with several species found in the American subtropics. Discover what unique bromeliads Plantsy growers have to offer.'
      break;
    case '/herbs':
      searchCategory = 'Herb';
      categoryInfo = 'In general use, herbs are a widely distributed and widespread group of plants, excluding vegetables and other plants consumed for macronutrients, with savory or aromatic properties that are used for flavoring and garnishing food, for medicinal purposes, or for fragrances. Get your garden growing and discover what herbs Plantsy growers have to offer.'
      break;
    case '/orchids':
      searchCategory = 'Orchid';
      categoryInfo = 'Orchidaceae, commonly called the orchid family, is a diverse and widespread family of flowering plants, with blooms that are often colourful and fragrant. Along with the Asteraceae, they are one of the two largest families of flowering plants. Orchids are one-of-a-kind, discover what Plantsy growers have to offer to add a splash of color.'
      break;
    case '/pottery':
      searchCategory = 'Pottery';
      categoryInfo = 'Check out our pottery for plants selection for the very best in unique or custom, handmade pieces from our growers & pots shops.'
      break;
    case '/houseplants':
      searchCategory = 'House Plant';
      categoryInfo = 'House plants can thrive in places such as residences and offices, mainly for decorative purposes, but studies have also shown them to have positive psychological effects. Discover all the varieties of house plants that Plantsy growers have to offer to add some green to home.'
      break;
    case '/succulents':
      searchCategory = 'Succulent';
      categoryInfo = 'Succulent plants have a unique adaptation that enables them to tolerate limited watering better than most houseplants. Their thick, fleshy leaves and stems, as well as their enlarged roots, allow them to retain water so that they do not need watering as frequently as other plants. Discover the many species that Plantsy growers have available and give a little succulent a new home.'
      break;
    case '/cacti':
      searchCategory = 'Cactus';
      categoryInfo = 'A cactus is a member of the plant family Cactaceae, a family comprising about 127 genera with some 1750 known species of the order Caryophyllales. Get a taste of the desert and discover what unique cacti Plantsy growers have available.'
      break;
    case '/supplies':
      searchCategory = 'Supplies';
      categoryInfo = 'Gardening supplies can make the journey to acheiving a green thumb a bit easier. Discover what tools may help you and your plants thrive.'
      break;
    case '/airplants':
      searchCategory = 'Air Plant';
      categoryInfo = 'Tillandsia is a genus of around 650 species of evergreen, perennial flowering plants in the family Bromeliaceae, native to the forests, mountains and deserts of northern Mexico and south-eastern United States, Mesoamerica and the Caribbean to mid Argentina. Air plants are also perfect plants to display in your bedroom because they photosynthesize at night. So while you are sleeping, they emit fresh oxygen into the air. Being among plants can help reduce stress, lower blood pressure, and improve focus at home or work.'
      break;
    case '/bonsai':
      searchCategory = 'Bonsai';
      categoryInfo = "Bonsai have long been respected in the ancient art of Feng Shui for their ability to draw life energies into a room, sharing them gladly with all who pass through. As a focus of sight, conversation, and living forces, a Bonsai can quickly spread joy and contentment to all who see it. Discover the unique and carefully grown bonsai's Plantsy growers have to offer."
      break;
    default: 
      return null;
  }

  const sliced = path.slice(1);
  const category = sliced[0].toUpperCase() + sliced.slice(1).toLowerCase();

  useEffect(() => {
    props.fetchByCategory(searchCategory);
    window.scrollTo(0, 0);
  }, [path]);

  return props.products[props.products.length - 1] ? (
    <div className="category-index">
      <div className="category-index__info-wrapper">
        <h1>{category}</h1>
        <h2>{categoryInfo}</h2>
      </div>
      <div className="category-index__ul-wrapper">
        <ul className="category-index__items-wrapper">
          {props.products.map((item, idx) => (
            <li key={idx}>
              <CategoryItem item={item}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <Spinner/>
  );
}

export default CategoryIndex;