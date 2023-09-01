import PrimaryNav from "./components/PrimaryNav"
import SecondaryNav from "./components/SecondaryNav"
import About from "./Pages/About"
import Footer from "./components/Footer"
import { useState } from 'react'
import MoreDropdown from "./components/MoreDropdown"

function App() {

  const [ moreDropdown, setMoreDropdown ] = useState(false)

  return (
    <>
      <header>
        <PrimaryNav
          moreDropdown={moreDropdown}
          setMoreDropdown={setMoreDropdown}
        />
        {moreDropdown && 
          <MoreDropdown/>
        }
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
