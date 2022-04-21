import React, { useState } from "react";
import { HiArrowCircleUp } from 'react-icons/hi';
import { GiFlowerPot } from 'react-icons/gi'

const Upload = props => {

  // if not shop, input for shop
  // drop down for category
  // make price/quantity an integer

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

  console.log('SHOP', shopName);
  console.log('TITLE', title);
  console.log('CATEGORY', category);
  console.log('DESC', description);
  console.log('PRICE', price);
  console.log('QUANTITY', quantity);
  console.log('IMAGES', imageFiles);

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

  const handleSubmit = e => {
    console.log('yay!!!')
  }
  
  
  return (
    <div className="upload">
      <form className="upload__inner" onSubmit={handleSubmit}>
        <div className="upload__left">

          {props.currentUser.shop ? (
            null
          ) : (
            <label>Create shop
              <div>
                <textarea placeholder="Give a name to your shop" value={shopName} onChange={update('shopName')}/>
              </div>
            </label>
          )}

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
          <div className="upload__image-wrapper">
            <div className="upload__image-wrapper__new-img">
            </div>
            {images.length >= 4 ? (
                null
              ) : (
            <label>
              <div className="upload__image-wrapper__img-input">
                <div className="upload-arrow-wrapper">
                  <HiArrowCircleUp size={44} className="upload-arrow"/>
                  <h3>Choose a file to upload</h3>
                </div>
                  <input id="add-photo" type="file" onChange={handleUpload} />
              </div>
            </label>
            )}
          </div>
        </div>

        <div className="upload__right">
          <label className="upload__right__title-wrapper">Title
            <div>
              <textarea placeholder="Add a title for your listing . . ." value={title} onChange={update('title')}/>
            </div>
          </label>

          <label className="upload__right__category-wrapper">Category
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

          <label className="upload__right__desc-wrapper">Description
            <div>
              <textarea placeholder="Tell shoppers about your product, describing the color, care information or variety . . ." value={description} onChange={update('description')}/>
            </div>
          </label>

          <div className="product-show__quantity-wrapper quantity-wrapper">
            <p>Quantity:</p>
            <div className="quantity-counter">
              <button type="button" onClick={decrement}>&minus;</button>
              <span>{quantity}</span>
              <button type="button" onClick={increment}>&#43;</button>
            </div>
          </div>

          <label>Price
            <div>$
              <input value={price === 0 ? '0.00': price} onChange={update('price')}/>
            </div>
          </label>

        </div>

        <button type="submit" className="update__create">Create Listing</button>
      </form>
    </div>
  );
}

export default Upload;