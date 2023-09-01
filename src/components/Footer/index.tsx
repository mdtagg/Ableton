import './index.css'
import { Icon } from '@iconify/react'

const Footer = () => {
    return (

    <footer>
 
        <p id="footer-title">Ableton</p>

        <ul id="header-buttons">
            <li><a>Register Live or Push &gt;</a></li>
            <li><a>About Ableton &gt;</a></li>
            <li><a>Jobs &gt;</a></li>
            <li>
                <ul className="flex-row">
                    <li>
                        <a>
                            <Icon icon="uil:facebook" color="blue" width="40" height="30" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <Icon icon="openmoji:twitter" width="40" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <Icon icon="mdi:youtube" color="red" width="40" />
                        </a>
                    </li>
                    
                    <li>
                        <a>
                            <Icon icon="skill-icons:instagram" color="orange" width="40" height="25" />
                        </a>
                    </li>
                </ul>
            </li>
        </ul>

        <ul id="education-container">
            <li className="title">Education</li>
            <li><a>Offers for students and teachers &gt;</a></li>
            <li><a>Ableton for the Classroom &gt;</a></li>
            <li><a>Ableton for Colleges and Universities &gt;</a></li>
        </ul>

        <div id="sign-up-container">
            <div>
                <p className="title">Sign up to our newsletter</p>
                <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
            </div>
            <div className="email-container">
                <input placeholder="    Email Address"></input>
                <button>Sign up</button>
            </div>
        </div>

        <ul id="community-container">
            <li className="title">Community</li>
            <li><a>Find Ableton User Groups &gt;</a></li>
            <li><a>Find Certified Training &gt;</a></li>
            <li><a>Become a Certified Trainer &gt;</a></li>
        </ul>

        <div id="language-container">
            <p>Language and Location</p>

            <label htmlFor="language-chooser"></label>
            <select id="language-chooser" name="language">
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="fr">Francais</option>
                <option value="ja">日本語</option>
                <option value="cn">简体中文</option>
                <option value="es">Español</option>
            </select>

            <label htmlFor="country-chooser"></label>

            <select id="country-chooser" name="country">
                <option>United States</option>
                <option>United Kingdom</option>
                <option>France</option>
                <option>Germany</option>
                <option>Canada</option>
                <option>Japan</option>
                <option>China</option>
            </select>
        </div>

        <div id="more-info-container">
            <li><a>Contact Us</a></li>
            <li><a>Press Resources</a></li>
            <li><a>Legal Info</a></li>
            <li><a>Privacy Policy</a></li>
            <li><a>Cookie Settings</a></li>
            <li><a>Imprint</a></li>
        </div>
    </footer>

    )
}

export default Footer