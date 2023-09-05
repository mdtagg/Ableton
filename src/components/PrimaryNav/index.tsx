import './index.css'
import Logo from './Logo'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom"

interface TPrimaryNav {
    moreDropdown:boolean
    setMoreDropdown: React.Dispatch<React.SetStateAction<boolean>>
    windowSize:number
}

const PrimaryNav = (props:TPrimaryNav) => {

    const { moreDropdown, setMoreDropdown, windowSize } = props
    const moreSymbol = moreDropdown ? " -" : " +"
    const primaryNavLinks = ['Live','Push','Note','Link','Shop','Packs','Help']

    return (

    <nav id="primary-nav">
        {windowSize >= 1050 ?
        <>
        <ul className="nav-list">
            <li>
                <Link to="/"><Logo/></Link>
                    
            </li>
            
            {primaryNavLinks.map(link => {
                return (<li><a>{link}</a></li>)
            })}

            <li>
                <button 
                    className="more-button"
                    onClick={() => setMoreDropdown(!moreDropdown)}
                >
                    <span>More</span>
                    <span id="plus-symbol">{moreSymbol}</span>
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
        </> 
        :
        <div className="small-menu">
            <Logo/>
            <button className="menu-icon-container">
                <p>Menu</p>
                {moreDropdown ?
                    <Icon icon="mdi:menu-up" /> :
                    <Icon icon="mdi:menu-down" />
                }   
            </button>
        </div>
        }  
    </nav>

    )
}

export default PrimaryNav