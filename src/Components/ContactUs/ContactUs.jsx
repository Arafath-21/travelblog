import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactUs = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h8t6gro', 'template_jpscukg', form.current, 'QtJp5ZIyWBC9sWFaD')
      .then((result) => {
        alert('Email sent successfully:', result.text);
        form.current.reset();
      }, (error) => {
        console.error('Error sending email:', error);
      });
  };

  return  (
    <div className="container" style={{overflowX:"hidden"}}>
      <div className="h1 fw-bolder text-center mt-5">Contact Us</div>
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <div className="col-md-6">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3" name="message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
