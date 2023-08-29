import PrimaryNav from "./PrimaryNav"
import SecondaryNav from "./SecondaryNav"

function App() {

  return (
    <>
      <header>
        <PrimaryNav/>
        <SecondaryNav/>
      </header>
      <main>
       
        <img 
          src="/src/assets/pexels-cowomen-2041627.jpg"
          className="main-image"
        ></img>
        <section className="text-section">
          <p className="top-text">We make <a>Live</a>, <a>Push</a> and <a>Link</a> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</p>
          <p className="bottom-text">Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
        </section>
        <div className="background-container">
          
          <div className="image-container">
            <img
              src="/src/assets/pexels-andrew-neel-2312369.jpg"
              height="100%"
              width="100%"
            ></img>
          </div>

          <div className="color-image-container">
            <img
                src="/src/assets/pexels-proxyclick-visitor-management-system-2451567.jpg"
                height="50%"
                width="50%"
              >
              </img>
          </div>
        </div>
        
      </main>
    </>
  )
}

export default App
