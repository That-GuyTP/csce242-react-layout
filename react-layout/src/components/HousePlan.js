import "../css/HousePlan.css";
import "../components/HousePlans";

const HousePlan = (housePlan) => {
    
    
    return (
        <section className="house">
            <h3>{housePlan.name}</h3>
            <p>Size: {housePlan.size}</p>
            <p>Bedrooms: {housePlan.bedrooms}</p>
            <p>Bathrooms: {housePlan.bathrooms}</p>
            <p><img src={"http://localhost:3002/images/" + housePlan.main_image}></img></p>
        </section>
    );
};

export default HousePlan;