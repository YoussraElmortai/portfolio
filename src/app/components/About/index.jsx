import "./style.css"


const About = () => { 
    return (
        <section className="about">
            <article className="about__content">
                <p>Hello! 👋 I'm a frontend development student at the University of Applied Sciences in Amsterdam. 💻</p>
                <div className="link_wrapper"><a className="about__link" href="/Contact">Get in contact</a></div>
            </article>
        </section>
    );
}

export default About;