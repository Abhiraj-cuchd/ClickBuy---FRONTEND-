import React from 'react'
import './Footer.scss'
import paymentImg from '../../../public/img/payment.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit unde quod repellat porro autem consequatur!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, necessitatibus?
          </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit unde quod repellat porro autem consequatur!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, necessitatibus?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Click&Buy</span>
          <span className="copyright">
            &copy; Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src={paymentImg} alt="payment" />
        </div>
      </div>
    </div>
  )
}

export default Footer