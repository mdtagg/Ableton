import "./index.css"
import { Link } from "react-router-dom"
import { useState } from "react"

const SecondaryNav = () => {

    const [ headerRoute,setHeaderRoute ] = useState('about')

    const handleSwitch = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const target = e.target as HTMLElement
        const value = target.dataset.link as string
        setHeaderRoute(value)
    }

    return (
        <nav id="secondary-nav">
            <ul 
                className="nav-list"
            >
                <Link 
                    to="/" 
                    data-link="about"
                    onClick={(e) => handleSwitch(e)}
                    className={headerRoute === "about" ? "orange" : ""}
                >About</Link> 
                <Link 
                    to="/jobs"
                    data-link="jobs"
                    onClick={(e) => handleSwitch(e)}
                    className={headerRoute === "jobs" ? "orange" : ""}
                >Jobs</Link>
                <li><a>Apprenticeships</a></li>
            </ul>
        </nav>
    )
}

export default SecondaryNav