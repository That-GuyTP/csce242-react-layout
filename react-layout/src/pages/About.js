import SlideShow from "../components/SlideShow";
import HousePlans from "../components/HousePlans";

const About = () => {

    const importAll = (resource) => {
        return resource.keys().map(resource);
    }

    const images = importAll();

    return (
    <>
        <h1>About Page</h1>;
        <SlideShow />
    
        <h3>House Plans</h3>
        <HousePlans />
    </>
    );
};

export default About;