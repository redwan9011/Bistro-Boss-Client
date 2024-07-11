import Banner from "../../HomeComponents/Banner/Banner";
import Category from "../../HomeComponents/Category/Category";
import Featured from "../../HomeComponents/Featured/Featured";
import PopularMenu from "../../HomeComponents/PopularMenu/PopularMenu";
import Service from "../../HomeComponents/Service/Service";
import TestiMonials from "../../HomeComponents/TestiMonials/TestiMonials";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
                <Helmet>
        <title>SEE QUEEN | HOME</title>
      
      </Helmet>
            <Banner></Banner>
            <Category></Category>
            
            <PopularMenu></PopularMenu>
            <Service></Service>
            <Featured></Featured>

            <TestiMonials></TestiMonials>
          
        </div>
    );
};

export default Home;