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
        
      </main>
    </>
  )
}

export default App
