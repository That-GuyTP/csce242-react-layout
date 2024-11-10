import "../css/HousePlans.css";
import HousePlan from "../components/HousePlan";
import {useState, useEffect } from "react"; //Use effect - Utility than can asynchronously load parts of the webpage.
import axios from "axios";

const HousePlans = () => {
    const [houses, setHouses] = useState([]);

    //Asynchronously load parts of the webpage.
    useEffect(()=>{

        //Don't give the function a name but execute it immedieatly. A more optimizedly organized async function declaration and call.
        (async() =>{ 
            const response = await axios.get("http://localhost:3002/api/house_plans");
            setHouses(response.data);
        })(); 

    }, []);
    
    return (
        <div>
            <div className="house-plans">
                <h3>House Plans</h3>
                {houses.map((housePlan)=>( /*Basically a "for each" loop*/
                    <HousePlan 
                        name={housePlan.name}
                        size={housePlan.size}
                        bedrooms={housePlan.bedrooms}
                        bathrooms={housePlan.bathrooms}
                        main_img = {housePlan.main_image}
                    />
                ))}
            </div>
        </div>
    );
};

export default HousePlans;