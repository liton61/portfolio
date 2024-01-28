import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import ProjectInfo from "../../components/Project/ProjectInfo";
import Services from "../../components/Services/Services";
import Skills from "../../components/Skills/Skills";
import SoftSkills from "../../components/SoftSkills/SoftSkills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <SoftSkills></SoftSkills>
            <ProjectInfo></ProjectInfo>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;