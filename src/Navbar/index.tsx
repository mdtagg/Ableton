import './index.css'

const Navbar = () => {
    return (

    <nav>
      <svg 
        aria-hidden="true" 
        focusable="false" 
        className="nav-main-image"
        xmlns="http://www.w3.org/2000/svg" 
        width="45" 
        height="21" 
        viewBox="0 0 45 21"
      >
        <path 
          d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z">
        </path>
      </svg>
      <ul className="nav-list">
        <li><button>Live</button></li>
        <li><button>Push</button></li>
        <li><button>Note</button></li>
        <li><button>Link</button></li>
        <li><button>Shop</button></li>
        <li><button>Packs</button></li>
        <li><button>Help</button></li>
        <li><button>More <span>+</span></button></li>
      </ul>
      <ul className="nav-list trial-account">
        <li><button>Try Live for Free</button></li>
        <li>Log in or register</li>
      </ul>
    </nav>

    )
}

export default Navbar