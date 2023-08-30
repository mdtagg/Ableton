import "./index.css"

const SecondaryNav = () => {
    return (
        <nav id="sticky-nav">
            <ul 
                id="secondary-nav" 
                className="nav-list"
            >
                <li><a style={{"color":"orange"}}>About</a></li>
                <li><a>Jobs</a></li>
                <li><a>Apprenticeships</a></li>
            </ul>
        </nav>
    )
}

export default SecondaryNav