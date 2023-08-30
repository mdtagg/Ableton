import './index.css'

const About = () => {
    return (
        <>
        <div>
          <img 
            src="../../src/Assets/pexels-cowomen-2041627 (1)-min.jpg"
            height="100%"
            width="100%"
          />
          </div>
        
        <section className="text-section">
          <p className="top-text">We make <a>Live</a>, <a>Push</a> and <a>Link</a> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</p>
          <p className="bottom-text">Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
        </section>

        <section className="background-container">
          <div className="image-container adjust-left">
            <img
              src="../../src/Assets/pexels-andrew-neel-2312369 (1)-min.jpg"
              height="100%"
              width="100%"
              loading="lazy"
            />
          </div>
          <div className="color-image-container">
            <img
              src="../../src/Assets/pexels-proxyclick-visitor-management-system-2451567 (1)-min.jpg"
              height="50%"
              width="50%"
              loading="lazy"
            />
          </div>
        </section>
        
        <section className="text-section">
          <p className="top-text">Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</p>
          <p className="bottom-text">We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
        </section>
        
        <div id="first-video">
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            src="https://www.youtube.com/embed/VSPYMRurohc?si=09_Woy0KO7efEwiq" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
          ></iframe>
          <p>How to coil a climbing rope</p>
        </div>

        <section className="text-section">
          <p className="top-text">We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.</p>
          <p className="bottom-text">Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.</p>
        </section>

        <div className="background-container">
          <div id="left-image-container" className="color-image-container">
              <img
                src="../../src/Assets/pexels-blaz-erzetic-2426085 (1)-min.jpg"
                width="80%"
                loading="lazy"
              />
                
              <img
                src="../../src/Assets/pexels-lukas-590041 (1)-min.jpg"
                height="50%"
                width="80%"
                loading="lazy"
              />
            </div>
            <div className="image-container  adjust-right">
              <img
                src="../../src/Assets/pexels-djordje-petrovic-2102416 (1)-min.jpg"
                height="100%"
                width="80%"
                loading="lazy"
              />
          </div>
        </div>

        <section className="text-section">
          <p className="top-text">We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.</p>
          <p className="bottom-text">Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.</p>
        </section>
        </>
    )
}

export default About