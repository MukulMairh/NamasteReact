import resData from "../utils/mockData";
import RestrauntCard from "./RestrauntCards";
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* Here goes many restraunt cards */}
                {/* To send the data dynamically, we use props, props are nothing but arguments. */}
                {/* <RestrauntCard resName="Meghana Foods" cuisine="Biryani, Nort Indian, Asian" rating="4.4" /> */}
                {/* <RestrauntCard resName="KFC" cuisine="Fast food, burger" rating="4.0" /> */}
                {/* <RestrauntCard resData={resData[0]}></RestrauntCard>*/}

                {/* Each  child in a list should have a unique "key" prop. This is very important. 
                The key should be unique and we can use either of the options available below.
                Index as a key is a anti-pattern, we should not use indexes as key as per the official documentation of React*/}
                {
                    resData.map(restraunt => <RestrauntCard key={restraunt.info.id} resData={restraunt} />)
                }
                {/* {
                    resData.map((restraunt, index) => <RestrauntCard key={index} resData={restraunt} />)
                } */}
            </div>
        </div>
    )
}

export default Body;