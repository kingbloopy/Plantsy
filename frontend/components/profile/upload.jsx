import React, { useState } from "react";
import { HiArrowCircleUp } from 'react-icons/hi';
import { GiFlowerPot } from 'react-icons/gi'

const Upload = props => {

  // if not shop, input for shop
  // drop down for category
  // make price/quantity an integer

  let [shopName, setShopName] = useState('')
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [price, setPrice] = useState(null);
  let [quantity, setQuantity] = useState(null);
  let [photoFile, setPhotoFile] = useState(null);
  let [photoUrl, setPhotoUrl] = useState(null);
  const images = [];

  const handleUpload = e => {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPhotoFile(file);
      setPhotoUrl(fileReader.result);
    }
    if (file) fileReader.readAsDataURL(file);
  }
  
  if (images.length !== 4) {
    photoUrl ? images.push(<img id="upload__show-image" src={photoUrl} />)
    : null;
  }

  console.log('IMAGES', images)

  return (
    <div className="upload">
      <div className="upload__inner">
        <div className="upload__left">
          <h1>Upload up to 4 images</h1>
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
            <label>
              <div className="upload__image-wrapper__img-input">
                <div className="upload-arrow-wrapper">
                  <HiArrowCircleUp size={44} className="upload-arrow"/>
                </div>
                <input id="add-photo" type="file" onChange={handleUpload} />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;