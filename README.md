![Plantsy Logo](app/assets/images/plantsy_logo.png)

[Plantsy](https://plantsy-etsy.herokuapp.com/#/) is a single-page fullstack clone of Etsy, that features listings from various users selling plants or plant materials. Plantsy allows users to not only, sign in and save account information, but also upload images and list/remove products under their profile, add, update, and remove items from their cart, and create, edit and delete reviews. 

A Ruby on Rails backend was implemented in conjunction with a PostgresSQL database to store product information, user credentials, cart information, AWS (S3) photo URL's and shop information. Additionally, a ReactJS/ReduxJS frontend was utilized alongside BEM styled SCSS files in order to pull together the visials and UI to create the best user experience.

The header also features a nav bar with up to ten varying product types that fetch different products depending on their category in the database. Along with the nav bar, users can also utilize the search bar to fetch for products based on the keywords typed into the input.


<!-- This was implemented using a dynamic API call in the controller that is passed a category param to perform an active record query. In order to DRY up the code even more, I implemented a reusable component using a Switch operator... -->

[Plantsy live URL](https://plantsy-etsy.herokuapp.com/#/)

---
## Features

#### 1. Sign in / Register Modal
The header contains a link to both a sign in modal or register modal, depending on where you naviagate. Custom error messages will be rendered accordingly for both the email, name or password on sign in and register. User also have the option to sign in via a Demo user account.

![](https://media.giphy.com/media/4s45ILclsq7icqhjfG/giphy.gif)

#### 2. Cart
Products can be added, updated, and removed from a user's cart. When an item's quanity has been reached, the user can no longer add that specific item.

![](https://media.giphy.com/media/AxgQS4z90Yd6Pg4BZZ/giphy.gif)

#### 3. Reviews
User's can leave one review per product if they are logged in, or if the listing is not one of their own products. A review comment is optional but an error will be rendered if a star rating is not given. Both the rating and comment can be edited and removed.

![](https://media.giphy.com/media/wvOnEhZfGVTlnt3OEK/giphy.gif)

#### 4. Add Post
User's can add a listing with up to four images. Custom errors will be rendered if there is not at least one image, if shop name, title, description, or category is left blank, or is the price is not greater than $0.

![](https://media.giphy.com/media/rfy9fVPOKjWV2wwZVj/giphy.gif)

#### 5. Search
The search bar will fetch and render products based on the keywords that are typed into the search input.

![](https://media.giphy.com/media/4BCXyL3MRw8zjpG9qe/giphy.gif)


#### 6. Splash Page
The splash page utilizes multiple Grid layouts and styles to display products from differing categories. When a user is logged in, a recommended section will appear, displaying ever-changing products.

![](https://media.giphy.com/media/hJTEuUlM0NHXQqNKfB/giphy.gif)


--- 
## Featured Code

```
  const photos = props.photos;

  let [mainPic, setMainPic] = useState(photos[0]);
  let [index, setIndex] = useState(0);

  const rightClickHandler = e => {
    e.preventDefault();
    let newIndex =
      photos.indexOf(mainPic) + 1 >= photos.length ? (
        0
      ) : (
        photos.indexOf(mainPic) + 1
      );
    setIndex(newIndex)
    setMainPic(photos[newIndex]);
  }

  const leftClickHandler = e => {
    e.preventDefault();
    let newIndex =
      photos.indexOf(mainPic) - 1 < 0 ? (
        photos.length - 1
      ) : (
        photos.indexOf(mainPic) - 1
      );
    setIndex(newIndex)
    setMainPic(photos[newIndex]);
  }

  const pictureHandler = e => {
    setMainPic(e.currentTarget.src);
    setIndex(photos.indexOf(mainPic));
  }
```
In the photos.jsx file, I implemented a photo carousel effect using React hooks setState alongside click handlers.


```
.cart-items {
  max-width: 770px;
  width: 100%;
  
  &:last-child:active {
    content: '';
    display: block;
    padding-bottom: 26px;
    border-bottom: 1px solid transparent;
  }
  
  &__upper {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    & > h1 {
      font-size: 30px;
    }

    & > a {
      text-decoration: none;
      font-weight: 500;
      font-size: 16px;
      background-color: transparent;
      padding: 14px 18px;
      border-radius: 24px;
      -webkit-transition: background 0.8s;
      transition: background 0.8s;

      &:hover {
        background-color: $hover-button;
        cursor: pointer;
        color: $dark-green;
      }
    }
  }
}
```
Implemented the BEM SCSS naming convention to keep styling organized and scalable.

---
## Technologies
* React.js
* Redux.js
* Javascript
* SCSS / CSS
* HTML
* Ruby on Rails
* PostgreSQL
* AWS

--- 
## Bonus Features
* Edit post functionality
* Edit user/user bio
* User profile picture
* Magnify images on-click
* Favorite products
* Favorite shops