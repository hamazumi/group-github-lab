export const About = (props) => {
    let aboutData = props.aboutArray.map((person, id) => {
        return (
            <div className="person-box">
                <img src={person.image} alt="headshot"/>
                <h3>{person.name}</h3>
                <p>{person.body}</p>
            </div>
        )
    })
    return (
        <>
            <h1>Meet Room One</h1>
            <div className="about-box">
                {aboutData}
            </div>
        </>

    )
}