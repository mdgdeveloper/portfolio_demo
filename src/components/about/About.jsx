import "./about.css";
import Award from "../../img/award.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">Acerca de mi</h1>
                <p className="a-sub">
                    Fracasar como medio de vida. Levantarse una vez más es mi religión. 
                </p>
                <p className="a-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis nunc et massa rutrum dignissim. 
                Ut cursus sed lorem eget luctus. Praesent tempus consequat mi a dapibus. Duis at lorem dignissim augue 
                lobortis pellentesque nec feugiat eros. Mauris vestibulum, sem nec tempus interdum, eros diam dictum orci, 
                id maximus quam massa nec nibh. Cras ut consequat massa. Class aptent taciti sociosqu ad litora torquent
                 per conubia nostra, per inceptos himenaeos. 
                </p>
                <div className="a-awards">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Azure Fundamentals</h4>
                        <p className="a-award-desc">
                            Information about the Azure Fundamentals award (look for it in Google once the design is completed)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
