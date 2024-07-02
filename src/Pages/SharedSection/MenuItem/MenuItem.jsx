/* eslint-disable react/prop-types */


const MenuItem = ({menu}) => {
    const { name, image, price,recipe} = menu || {}
    return (
    <div>
            <div className="flex gap-3 items-center">
            <img className="w-28 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl  " src={image} alt="" />
           <div>
           <h1 className="uppercase font-light">{name} ------------</h1>
            <h4 className="text-slate-500">{recipe}</h4>
           </div>
            <p className="text-yellow-500">${price}</p>
        </div>

        
    </div>
    );
};

export default MenuItem;