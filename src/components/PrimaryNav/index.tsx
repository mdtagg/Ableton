import './index.css'
import Logo from './Logo'

interface TPrimaryNav {
    moreDropdown:boolean
    setMoreDropdown: React.Dispatch<React.SetStateAction<boolean>>
}

const PrimaryNav = (props:TPrimaryNav) => {

    const { moreDropdown,setMoreDropdown } = props
    const moreSymbol = moreDropdown ? " -" : " +"
    const primaryNavLinks = ['Live','Push','Note','Link','Shop','Packs','Help']

    return (

    <nav id="primary-nav">
        <ul className="nav-list">
            <Logo/>
            {primaryNavLinks.map(link => {
                return (<li><a>{link}</a></li>)
            })}

            <li>
                <button 
                    className="more-button"
                    onClick={() => setMoreDropdown(!moreDropdown)}
                >
                    <span>More</span>
                    <span>{moreSymbol}</span>
                </button>
            </li>
        </ul>
    
        <ul 
            id="trial-account" 
            className="nav-list"
        >
            <li><a id="trial">Try Live for Free</a></li>
            <li><a>Log in or register</a></li>
        </ul>
    </nav>

    )
}

export default PrimaryNav