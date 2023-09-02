import PrimaryNav from "./components/PrimaryNav"
import SecondaryNav from "./components/SecondaryNav"
import About from "./Pages/About"
import Footer from "./components/Footer"
import Jobs from "./Pages/Jobs"
import { useState,useEffect } from 'react'
import MoreDropdown from "./components/MoreDropdown"
import { Routes, Route } from "react-router-dom"

function App() {

  const [ moreDropdown, setMoreDropdown ] = useState(false)
  const [ windowSize, setWindowSize ] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize",() => {
      setWindowSize(window.innerWidth)
    })
  },[])

  return (
    <>
      <header>
        <PrimaryNav
          moreDropdown={moreDropdown}
          setMoreDropdown={setMoreDropdown}
          windowSize={windowSize}
        />
        {moreDropdown && 
          <MoreDropdown/>
        }
      </header>
      <SecondaryNav/>
      <main>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="jobs" element={<Jobs/>} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
