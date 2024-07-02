import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiSolidQuoteLeft } from "react-icons/bi";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import axios from "axios";

const TestiMonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get('/reviews.json')
            .then(res => {
                setReviews(res.data)
            })
    }, [])
    return (
        <div className="my-10 max-w-6xl mx-auto ">
            <div className="mb-8">
                <SectionTitle
                    subtitle={'What Our Client Say'}
                    heading={'TESTIMONIALS'}
                ></SectionTitle>
            </div>

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide key={review._id}>

                            <div className="text-center px-24 ">
                                <Rating
                                    style={{ maxWidth: 180 , margin:'auto'}}
                                    value={review?.rating}
                                    readOnly
                                />
                                <BiSolidQuoteLeft className="mx-auto text-7xl my-4"></BiSolidQuoteLeft>


                                <p>{review?.details}</p>
                                <h1 className="text-lg text-yellow-500">{review?.name}</h1>
                            </div>


                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default TestiMonials;