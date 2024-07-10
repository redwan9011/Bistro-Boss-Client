import img1 from '../../../src/assets/service/5403403550_7e0f08aed6_o-1024x681-220x220.jpg'
import img2 from '../../../src/assets/service/9569414693_33895ce768_o-685x1024-220x220.jpg'
import img3 from '../../../src/assets/service/photodune-2201397-chef-with-dish-m-1024x682-220x220.jpg'
import img4 from '../../../src/assets/service/shutterstock_116468653-220x220.jpg'
const Service = () => {
    return (
        <div className='max-w-6xl mx-auto mt-20'>
            <div className='grid grid-cols-2 gap-14'>
                <div>
                    <h1 className='text-4xl font-bold mt-5'>We Created best dinning experience for you & your family</h1>
                    <h6 className='text-yellow-500 font-semibold mb-10 mt-3'>SIMPLY BUT DELICIOUS EXPERIENCE</h6>

                    <p className='text-gray-500 '>Morbi leo risus, porta ac consectetur ac, vesti bulum at eros. Aenean lacinia bibendum nulla sed consec us eget urna mollis ornare vel euleo. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient monte siculus mus.Maecenas sed diam eget risus varius blandit sit amet non magna.
                    </p>

                </div>



                <div className='grid grid-cols-2 gap-3 '>
                <img src={img4} alt="seriviceImg" className='w-full'/>
                    <img src={img1} alt="seriviceImg" className='w-full'/>
                    <img src={img2} alt="seriviceImg" className='w-full'/>
                    <img src={img3} alt="seriviceImg" className='w-full'/>
                    

                </div>
            </div>
        </div>
    );
};

export default Service;