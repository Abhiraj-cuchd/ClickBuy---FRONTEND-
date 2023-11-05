import React, { useEffect, useState } from 'react'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/useFetch';

import './Product.scss'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../cart/cartReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {

  const [selectedImage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const id = useParams().id;

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const dispatch = useDispatch();

  const toastNotify = () => {
    toast.dark("Item added to cart");
  }

  const addedTOCart = () => {
    toast.dark("Item added to cart");

  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setSelectedImage("img")} />
          <img src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e => setSelectedImage("img2")} />
          <img src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes?.img3?.data?.attributes?.url} alt="" onClick={e => setSelectedImage("img3")} />
          <img src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes?.img4?.data?.attributes?.url} alt="" onClick={e => setSelectedImage("img4")} />
        </div>
        <div className="mainImg">
          <img src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes[selectedImage]?.data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>₹{data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <div onClick={toastNotify}>
          <button className="add" onClick={() => dispatch(addToCart({
            id: data.id,
            title: data.attributes.title,
            desc: data.attributes.desc,
            price: data.attributes.price,
            img: data.attributes.img.data.attributes.url,
            quantity
          }))}>
            <AddShoppingCartIcon /> Add to Cart
          </button>
        </div>

        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> Add to Wishlist
          </div>
          <div className="item">
            <BalanceIcon /> Add to Compare
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product