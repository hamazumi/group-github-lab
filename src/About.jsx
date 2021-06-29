export const About = (props) => {
    let aboutData = props.aboutArray.map((person, id) => {
        return (
            <div className="person-box">
                <header className="person-header">
                    <img src={person.image} alt="headshot"/>
                    <h3>{person.name}</h3>
                </header>
                <footer id="person-footer">
                    <p>{person.body}</p>
                </footer>
            </div>
        )
    })
    return (
        <>
            <header className="about-header">
                <h1>Meet Room One</h1>
            </header>
            <body>
                <div className="about-box">
                    {aboutData}
                </div>
            </body>
        </>

    )
}