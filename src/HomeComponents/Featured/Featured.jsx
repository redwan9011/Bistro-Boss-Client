
import featureimage from "../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div className="my-20">
          

            <div className="hero min-h-[85vh]" style={{ backgroundImage: `url(${featureimage})` , backgroundAttachment:'fixed'}}>
                <div className="hero-overlay bg-black bg-opacity-60">
              
                </div>
            
              
          <div > 

           
            <div className="text-center mb-10">
            <h1 className='text-yellow-400 font-semibold text-xl'>----Check it Out----</h1>
            <div className='h-[2px] bg-slate-200 w-4/12 mx-auto my-3'></div>
            <h1 className='text-3xl text-white'>Featured Item</h1>
            <div className='h-[2px] bg-slate-200 w-4/12 mx-auto my-3'></div>
        </div>
           
            <div className="flex items-center gap-8 max-w-6xl mx-auto mt-5 text-white" >
                <img src={featureimage} alt="" className="w-2/5"/>
                <div className="w-3/6 space-y-1 ">
                    <p>March 20, 2023</p>
                    <h2>WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline  border-t-0 border-r-0 border-l-0 text-white">Order Now</button>
                </div>
            </div>
          </div>
            </div>
        </div>
    );
};

export default Featured;