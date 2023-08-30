import PrimaryNav from "./PrimaryNav"
import SecondaryNav from "./SecondaryNav"
import About from "./Pages/About"

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
      <footer>
        <div>
          <p>Ableton</p>
        </div>

        <div>
          <ul>
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
            <li>
              <div>
                {/* <img><a></a></img>
                <img><a></a></img>
                <img><a></a></img>
                <img><a></a></img> */}
              </div>
            </li>
          </ul>
        </div>
        <div></div>
        <div></div>
      </footer>
    </>
  )
}

export default App
