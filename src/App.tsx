import PrimaryNav from "./PrimaryNav"
import SecondaryNav from "./SecondaryNav"
import About from "./Pages/About"
import Footer from "./Footer"

function App() {

  return (
    <>
      <header>
        <PrimaryNav/>
        <SecondaryNav/>
      </header>
      <main>
        <About/>
      </main>
      <Footer/>
    </>
  )
}

export default App
