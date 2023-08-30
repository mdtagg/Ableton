import './index.css'
import Logo from './Logo'
console.log(Logo)

const PrimaryNav = () => {

    const primaryNavLinks = ['Live','Push','Note','Link','Shop','Packs','Help']

    return (

    <nav id="primary-nav">
        <ul className="nav-list">
            <Logo/>
            {primaryNavLinks.map(link => {
                return (<li><a>{link}</a></li>)
            })}

            <li>
                <button className="more-button">
                    <span>More</span>
                    <span> +</span>
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