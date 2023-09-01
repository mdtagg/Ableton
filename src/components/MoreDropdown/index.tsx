import './index.css'

const MoreDropdown = () => {

    const moreTexts = [
        ["loop","Watch Talks, Performances and Features from Ableton's Summit for Music Makers"],

        ["Learning Music", "Lear the fundamenals of music making right in your browser"],

        ["Learning Synths","Get started with synthesis using a web-based synth and accompanying lessons."],

        ["Making Music","Some tips from 74 Creative Strategies for Electronic Producers"]
    ]

    return (
        <aside className="more-aside">
            <h3>More on Ableton.com</h3>
            <div>
                <ul className="more-on-list">
                    <li><a>Blog</a></li>
                    <li><a>Abelton for the Classroom</a></li>
                    <li><a>Ableton for Colleges and Universities</a></li>
                    <li><a>Certified Training</a></li>
                    <li><a>About Ableton</a></li>
                    <li><a>Jobs</a></li>
                    <li><a>Apprenticeships</a></li>
                </ul>
            </div>
            <h3>More from Ableton</h3>
                <div className="more-from-list">
                {moreTexts.map(text => {
                    return (
                    <div>
                        <p>{text[0]}</p>
                        <p className="bottom-text">{text[1]}</p>
                    </div>
                    )
                })}
                </div>
                

        </aside>
    )
}

export default MoreDropdown