import React, { useState } from "react";
import { HiArrowCircleUp } from 'react-icons/hi';
import { GiFlowerPot } from 'react-icons/gi';
import "regenerator-runtime/runtime";

const Upload = props => {

  let [shopName, setShopName] = useState('')
  let [title, setTitle] = useState('');
  let [category, setCategory] = useState('');
  let [description, setDescription] = useState('');
  let [price, setPrice] = useState(0);
  let [quantity, setQuantity] = useState(1);
  let [photoFile, setPhotoFile] = useState(null);
  let [photoUrl, setPhotoUrl] = useState(null);
  let [images, setImages] = useState([]);
  let [imageFiles, setImageFiles] = useState([]);
  let [imgCount, setImgCount] = useState(4);

  let [titleError, setTitleError] = useState('');
  let [categoryError, setCategoryError] = useState('');
  let [shopError, setShopError] = useState('');
  let [descError, setDescError] = useState('');
  let [priceError, setPriceError] = useState('');
  let [imagesError, setImagesError] = useState('');

  const handleUpload = e => {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPhotoFile(file);
      setPhotoUrl(fileReader.result);
      images.push(<img key={images.length} id="upload__show-image" src={fileReader.result} />);
      imageFiles.push(file);
      setImgCount(imgCount - 1);
    }
    if (file) fileReader.readAsDataURL(file);
  }

  const update = field => {
    return e => {
      if (field === 'title') {
        setTitle(e.target.value);
      } else if (field === 'description') {
        setDescription(e.target.value);
      } else if (field === 'category') {
        setCategory(e.target.value);
      } else if (field === 'price') {
        setPrice(e.target.value);
      } else if (field === 'shopName') {
        setShopName(e.target.value);
      }
    }
  }

  const increment = () => {
    setQuantity(quantity += 1);
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity -= 1);
    }
  }

  const handleForm = e => {
    e.preventDefault();

    if (!shopName && !props.currentUser.shop){
      setShopError('Shop name cannot be blank');
    } else if (images.length === 0){
      setImagesError('Please upload at least one image');
    } else if (!title){
      setTitleError('Title cannot be blank');
    } else if (!category){
      setCategoryError('Must select a category');
    } else if (!description){
      setDescError('Description cannot be blank');
    } else if (price === 0) {
      setPriceError('Must input a price greater that $0');
    } else {
      if (!props.currentUser.shop){
        const newShop = {
          name: shopName,
          sales: 0
        }
        props.createShop(newShop);
      }
      handleSubmit();
    }
  }
  
  async function handleSubmit(){
    const formData = new FormData();
    
    formData.append('product[title]', title);
    formData.append('product[description]', description);
    formData.append('product[category]', category);
    formData.append('product[price]', price);
    formData.append('product[quantity]', quantity);
    imageFiles.forEach(file => (
      formData.append('product[photos][]', file)
    ));

    props.createProduct(formData);
    props.history.goBack();
  }
  
  
  return (
    <div className="upload">
      <form className="upload__inner" onSubmit={handleForm}>
        <div className="upload__left">

          {props.currentUser.shop ? (
            null
          ) : (
            <div className="upload__left__shop-wrapper text-area">
              <label>Create shop
                <div className="text-wrapper">
                  <textarea placeholder="Give a name to your shop" value={shopName} onChange={update('shopName')}/>
                </div>
              </label>
              <p className="upload__errors">{shopError}</p>
            </div>
          )}

          <div className="upload__left__images-wrapper">
            {images.length === 4 ? (
              <h1>You have uploaded 4 photos</h1>
            ) : (
              <h1>Upload up to {imgCount} images</h1>
            )}
            <div className="upload__left__images">

              <div className="upload__left__photo">
                {images.filter((img, idx) => idx === 0)}
                {images.length >= 1 ? (
                  null
                  ) : (
                    <GiFlowerPot className="filler-pic" size={120}/>
                    )}
              </div>
              <div className="upload__left__photo">
                {images.filter((img, idx) => idx === 1)}
                {images.length >= 2 ? (
                  null
                  ) : (
                    <GiFlowerPot className="filler-pic" size={120}/>
                    )}
              </div>
              <div className="upload__left__photo">
                {images.filter((img, idx) => idx === 2)}
                {images.length >= 3 ? (
                  null
                  ) : (
                    <GiFlowerPot className="filler-pic" size={120}/>
                    )}
              </div>
              <div className="upload__left__photo">
                {images.filter((img, idx) => idx === 3)}
                {images.length >= 4 ? (
                  null
                  ) : (
                    <GiFlowerPot className="filler-pic" size={120}/>
                    )}
              </div>
            </div>
          </div>
          <div className="upload__image-wrapper">
            <div className="upload__image-wrapper__new-img">
            </div>
            {images.length >= 4 ? (
                null
              ) : (
            <label>
              <div className="upload__image-wrapper__img-input">
                {/* <div className="upload-arrow-wrapper">
                  <h2>&#43;</h2>
                  <h3>Choose a file to upload</h3>
                </div> */}
                <div className="profile__upper__add-wrapper">
                  <h1 to="/create-listing">&#43;</h1>
                  <h2>Choose file</h2>
                </div>
                  <input id="add-photo" type="file" onChange={handleUpload} />
              </div>
            </label>
            )}
          </div>
          <p className="upload__errors">{imagesError}</p>
        </div>

        <div className="upload__right text-area">
          <div className="upload__right__title-wrapper">
            <label className="upload__right__title-label">Title
              <div className="text-wrapper">
                <textarea placeholder="Add a title for your listing . . ." value={title} onChange={update('title')}/>
              </div>
            </label>
            <p className="upload__errors">{titleError}</p>
          </div>

          <div className="upload__right__category-wrapper">
            <label className="upload__right__category-label">Category
              <div>
                <select value={category} onChange={update('category')}>
                  <option name="default" hidden aria-disabled>Choose a category</option>
                  <option name="air-plant">Air Plant</option>
                  <option name="bromeliad">Bromeliad</option>
                  <option name="bonsai">Bonsai</option>
                  <option name="cactus">Cactus</option>
                  <option name="herb">Herb</option>
                  <option name="house-plant">House Plant</option>
                  <option name="orchid">Orchid</option>
                  <option name="pottery">Pottery</option>
                  <option name="succulent">Succulent</option>
                  <option name="supplies">Supplies</option>
                </select>
              </div>
            </label>
            <p className="upload__errors">{categoryError}</p>
          </div>

          <div className="upload__right__desc-wrapper text-area">
            <label className="upload__right__desc-label">Description
              <div className="text-wrapper">
                <textarea placeholder="Tell shoppers about your product, describing the color, care information or variety . . ." value={description} onChange={update('description')}/>
              </div>
            </label>
            <p className="upload__errors">{descError}</p>
          </div>

          <div className="product-show__quantity-wrapper quantity-wrapper">
            <p>Quantity:</p>
            <div className="quantity-counter">
              <button type="button" onClick={decrement}>&minus;</button>
              <span>{quantity}</span>
              <button type="button" onClick={increment}>&#43;</button>
            </div>
          </div>

          <div className="upload__right__price-wrapper">
            <label>Price
              <div>$
                <input value={price === 0 ? '0.00': price} onChange={update('price')}/>
              </div>
            </label>
            <p className="upload__errors">{priceError}</p>
          </div>

        </div>

        <button type="submit" className="update__create">Create Listing</button>
      </form>
    </div>
  );
}

export default Upload;