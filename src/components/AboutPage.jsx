import React from 'react';

const AboutPage = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Yo, I’m just a young dude chasing my dreams with crazy energy and a whole lotta heart. I started out just having fun online, now I’m turning that grind into something real. Whether I’m screaming on stream, making people laugh, or just being me — it’s all love. I move fast, I go hard, and I keep it real every step of the way. Ain’t no slowing down — this is just the beginning.
        </p>
        <div className="about-images">
          <img src="src/assets/IMG_657.webp" alt="Profile" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;