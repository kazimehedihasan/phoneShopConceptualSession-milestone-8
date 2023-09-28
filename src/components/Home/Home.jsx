import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Phones from "../Phones/Phones";
import { Helmet } from "react-helmet-async";



const Home = () => {
    const phones = useLoaderData();
    return (
        <div>
            <Helmet>
            <title>all phone</title>
            </Helmet>
         <Banner></Banner>
        <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;