import React from 'react';

const ContactPage = () => {

  return (
    <section className="contact">
      <div className="contact-content">
        <h2 className="contact-title">Hit Me Up</h2>
        <p className="contact-description">
          Wanna connect? Got fan love, collab ideas, or just tryna vibe? Reach out — I’m always locked in with the supporters.
        </p>

        <div className='social-links'>
          {/* <a href="wa.me/+2347039050611" className='social-media-link'>WA</a> */}
          <a href="#" className='social-media-link'>IG</a>
          <a href="#" className='social-media-link'>X</a>
          {/* <a href="#" className='social-media-link'>GH</a> */}
          <a href="#" className='social-media-link'>YT</a>
        </div>

        <div className="social-links">
          <a href="https://twitter.com/yourhandle" className="social-link">X (Twitter)</a>
          <a href="https://youtube.com/yourchannel" className="social-link">YouTube</a>
          <a href="https://instagram.com/yourhandle" className="social-link">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
