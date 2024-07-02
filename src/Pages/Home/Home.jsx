import Banner from "../../HomeComponents/Banner/Banner";
import Category from "../../HomeComponents/Category/Category";
import Featured from "../../HomeComponents/Featured/Featured";
import PopularMenu from "../../HomeComponents/PopularMenu/PopularMenu";
import TestiMonials from "../../HomeComponents/TestiMonials/TestiMonials";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
                <Helmet>
        <title>BISTRO BOSS | HOME</title>
      
      </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>

            <TestiMonials></TestiMonials>
          
        </div>
    );
};

export default Home;