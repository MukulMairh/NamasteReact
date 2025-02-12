import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
    // console.log(props);
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    const { deliveryTime } = resData?.info?.sla;

    //For inline styling
    const styleCard = {
        backgroundColor: "#f0f0f0"
    }
    return (
        <div className="res-card" style={styleCard}>
            <div className="res-image-container">
                {/* Here goes image */}
                {/* <img className="res-logo" alt="res-logo" src="https://w7.pngwing.com/pngs/524/137/png-transparent-restaurant-logo-illustration-gluten-free-diet-logo-celiac-disease-wheat-restaurant-logo-emblem-food-free-logo-design-template.png"></img> */}
                <img className="res-logo" alst="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            </div>
            <div className="res-name">
            </div>
            <h4>{name} </h4>
            <h4>{cuisines.join(", ")} </h4>
            <h4>{deliveryTime} Mins </h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating + " stars"}</h4>
        </div>
    )
}
export default RestrauntCard;