import './index.css'

const Navbar = () => {
    return (

    <nav id="primary-nav">
      
    <ul className="nav-list">
        <svg 
            aria-hidden="true" 
            focusable="false" 
            className="nav-main-svg"
            xmlns="http://www.w3.org/2000/svg" 
            width="45" 
            height="21" 
            viewBox="0 0 45 21"
        >
            <path 
            d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z">
            </path>
        </svg>
        <li><a>Live</a></li>
        <li><a>Push</a></li>
        <li><a>Note</a></li>
        <li><a>Link</a></li>
        <li><a>Shop</a></li>
        <li><a>Packs</a></li>
        <li><a>Help</a></li>
        <li>
            <a className="more">
                <p>More</p>
                <span>+</span>
            </a>
        </li>
      </ul>
      <ul className="nav-list trial-account">
        <li><a id="trial">Try Live for Free</a></li>
        <li><a id="log-in">Log in or register</a></li>
      </ul>
    </nav>

    )
}

export default Navbar