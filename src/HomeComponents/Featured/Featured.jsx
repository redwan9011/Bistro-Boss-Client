
import featureimage from "../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div className="my-20">
          

            <div className="hero min-h-[85vh] " style={{ backgroundImage: `url(${featureimage})` , backgroundAttachment:'fixed'}}>
                <div className="hero-overlay bg-black bg-opacity-60 ">
              
                </div>
            
              
          <div > 

           
            <div className="text-center mb-10">
            <h1 className='text-yellow-400 font-semibold text-sm md:text-lg lg:text-xl pt-5'>----Check it Out----</h1>
            <div className='h-[2px] bg-slate-200 w-4/12 mx-auto my-3'></div>
            <h1 className='text-xl md:text-2xl lg:text-3xl text-white'>Featured Item</h1>
            <div className='h-[2px] bg-slate-200 w-4/12 mx-auto my-3'></div>
        </div>
           
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto mt-5 px-3 md:px-5 xl:px-0 text-white" >
                <img src={featureimage} alt="" className="w-8/12 md:w-2/5 md:pb-5"/>
                <div className="w-5/6 md:w-4/6 space-y-1 text-center md:text-left pb-5">
                    <p>March 20, 2023</p>
                    <h2>WHERE CAN I GET SOME?</h2>
                    <p className="text-xs md:text-sm  lg:text-base">Crafted with the finest ingredients and a touch of culinary artistry, this dish combines rich flavors and exquisite presentation to delight your senses. Whether youre a first-time visitor or a loyal patron,promises to deliver a memorable dining experience that you wont soon forget. Join us and savor the taste of perfection.</p>
                    <button className="btn btn-outline  border-t-0 border-r-0 border-l-0 text-white ">Order Now</button>
                </div>
            </div>
          </div>
            </div>
        </div>
    );
};

export default Featured;