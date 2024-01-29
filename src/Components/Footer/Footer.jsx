import React from 'react'
import './_footer.scss'

const Footer = () => {
  return <>
<footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
        <div className="contact-box__icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" viewBox="0 0 24 24" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            <path d="M15 7a2 2 0 0 1 2 2" />
            <path d="M15 3a6 6 0 0 1 6 6" />
          </svg>
        </div>
        <div className="contact-box__info">
          <a href="#" className="contact-box__info--title">+91 1234567890</a>
          <p className="contact-box__info--subtitle">  Mon-Fri 9am-6pm</p>
        </div>
      </div>  
      <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
        <div className="contact-box__icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-opened" viewBox="0 0 24 24" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <polyline points="3 9 12 15 21 9 12 3 3 9" />
            <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
            <line x1="3" y1="19" x2="9" y2="13" />
            <line x1="15" y1="13" x2="21" y2="19" />
          </svg>
        </div>
        <div className="contact-box__info">
          <a href="#" className="contact-box__info--title">info@company.com</a>
          <p className="contact-box__info--subtitle">Online support</p>
        </div>
      </div>
      <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
        <div className="contact-box__icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-2" viewBox="0 0 24 24" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="18" y1="6" x2="18" y2="6.01" />
            <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
            <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
            <line x1="9" y1="4" x2="9" y2="17" />
            <line x1="15" y1="15" x2="15" y2="20" />
          </svg>
        </div>
        <div className="contact-box__info">
          <a href="#" className="contact-box__info--title">Banglore,India</a>
          <p className="contact-box__info--subtitle">BG 10012, IN</p>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-sm" style={{backgroundColor: "#212121"}}>
    <div className="container">
      <div className="row py-4 text-center text-white">
        <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
          connect with us on social media
        </div>
        <div className="col-lg-7 col-md-6">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom pt-5 pb-5">
    <div className="container">
      <div className="row text-center text-white">
        <div className="col-12">
          <div className="footer-bottom__copyright">
            Copyright 2024 | Created by <a href="https://github.com/Arafath-21" target="_blank">Arafath</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
</>
}

export default Footer