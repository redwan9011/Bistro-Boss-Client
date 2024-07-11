/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax';

const Cover = ({heading, subtitle, image}) => {
    return (

        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={image}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div className="mb-10 ">
            <div className="hero min-h-[55vh] md:min-h-[70vh] ">
 
        <div className="text-white bg-black bg-opacity-40 w-4/6 md:w-3/6 h-1/2 flex flex-col gap-3 justify-center items-center ">
            <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold"> {heading}</h1>
            <p className="text-xs md:text-sm text-center md:px-8">{subtitle}</p>
        </div>
</div>
        </div>
    </Parallax>

       
    );
};

export default Cover;