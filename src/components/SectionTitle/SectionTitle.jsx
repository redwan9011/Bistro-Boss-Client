/* eslint-disable react/prop-types */


const SectionTitle = ({heading, subtitle}) => {
    return (
        <div className="text-center">
            <h1 className='text-yellow-400 font-semibold text-xl'>----{subtitle}----</h1>
            <div className='h-[2px] bg-slate-200 w-4/12 mx-auto my-3'></div>
            <h1 className='text-3xl '>{heading}</h1>
            <div className='h-[2px] bg-slate-200 w-4/12 mx-auto my-3'></div>
        </div>
    );
};

export default SectionTitle;