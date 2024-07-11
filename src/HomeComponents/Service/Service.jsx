import img1 from '../../../src/assets/service/5403403550_7e0f08aed6_o-1024x681-220x220.jpg'
import img2 from '../../../src/assets/service/9569414693_33895ce768_o-685x1024-220x220.jpg'
import img3 from '../../../src/assets/service/photodune-2201397-chef-with-dish-m-1024x682-220x220.jpg'
import img4 from '../../../src/assets/service/shutterstock_116468653-220x220.jpg'
const Service = () => {
    return (
        <div className='max-w-6xl mx-auto mt-20 px-3 md:px-5 xl:px-0'>
            <div className='grid md:grid-cols-2 md:gap-7 lg:gap-14'>
                <div>
                    <h1 className='text-lg md:text-2xl lg:text-4xl font-bold mt-5'>We Created best dinning experience for you & your family</h1>
                    <h6 className='text-yellow-500 font-semibold text-xs md:text-base mb-5 lg:mb-10 mt-3'>SIMPLY BUT DELICIOUS EXPERIENCE</h6>

                    <p className='text-gray-500 text-xs mb-3 md:mb-0 md:text-sm lg:text-base'>At SEA QUEEN, we believe that dining out should be more than just a meal; it should be an experience. That’s why we’ve crafted an ambiance that’s perfect for families and friends to enjoy delightful moments together. Our chefs have meticulously designed a menu that brings together the freshest ingredients and flavors, ensuring every dish is a celebration of taste and quality.
                            <br />
                        From the moment you walk through our doors, you’ll be welcomed with warm hospitality and a comfortable, inviting atmosphere. Whether you’re here for a casual lunch, a special family dinner, or a celebration, we promise a memorable dining experience that’s both simple and delicious.


                        Your table is ready, and we can’t wait to serve you!
                    </p>

                </div>



                <div className='grid grid-cols-2 gap-1 md:gap-3 '>
                    <img src={img4} alt="seriviceImg" className='w-full' />
                    <img src={img1} alt="seriviceImg" className='w-full' />
                    <img src={img2} alt="seriviceImg" className='w-full' />
                    <img src={img3} alt="seriviceImg" className='w-full' />


                </div>
            </div>
        </div>
    );
};

export default Service;