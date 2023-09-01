import PrimaryNav from "./components/PrimaryNav"
import SecondaryNav from "./components/SecondaryNav"
import About from "./Pages/About"
import Footer from "./components/Footer"

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
