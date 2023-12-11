import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import Projects2 from "../../components/Projects/Projects2";
import Projects3 from "../../components/Projects/Projects3";
import Services from "../../components/Services/Services";
import Skills from "../../components/Skills/Skills";
import SoftSkills from "../../components/SoftSkills/SoftSkills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <SoftSkills></SoftSkills>
            <Projects></Projects>
            <Projects2></Projects2>
            <Projects3></Projects3>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;