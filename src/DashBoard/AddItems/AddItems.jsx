import { useForm } from "react-hook-form"
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = UseAxiosSecure()
    const onSubmit= async(data) => {
        
      console.log(data);
        // upload the image to imagBB and then get an url

        const imageFile= {image : data.image[0]}
      const res = await axiosPublic.post(imageHostingApi , imageFile, {
        headers: {
          'content-type' : 'multipart/form-data'
        }
      })
      console.log(res.data.data.display_url);
      if( res.data.success){
        // now send the menu items to the database with image url
        const menuItem = {
          name: data.name,
          image: res.data.data.display_url,
          price: parseFloat(data.price),
          recipe: data.recipe,
          category: data.category

        }
        console.log(menuItem);
       const menuRes = await axiosSecure.post('/menus', menuItem)
       if(menuRes.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500
        });
       }
      }
    }
    return (
        <div>
           <div className=" bg-base-200">
  <div className="  ">

    <div className="card  w-full  shadow-2xl bg-white">
      <form className="card-body bg-slate-100" onSubmit={handleSubmit(onSubmit)}>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Receipi Name*</span>
          </label>
          <input type="text"  {...register("name")} placeholder="Recipe Name" name="name" className="input " required />
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Category*</span>
          </label>
         
      <select {...register("category")} defaultValue='default' className="input">
        <option disabled value='default'>Select a Category</option>
        <option value="salad">Salad</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="dessert">Dessert</option>
        <option value="drinks">Drinks</option>
      </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Price*</span>
          </label>
          <input type="text"  {...register("price")} placeholder="price" name="price" className="input " required />
        </div>

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Reciepie Details*</span>
          </label>
          <textarea className="input"id="" placeholder="Recipe Details"  {...register("recipe")}  name="recipe"  required cols="60" rows="10"></textarea>
        </div>

        <div className="mt-3">
            <input type="file" name="image"  id="" {...register("image")} required/>
        </div>


    
        <div className="form-control mt-6 w-fit">
          <button className="flex items-center px-4 py-2 rounded-lg text-white bg-yellow-600">Add Items <FaUtensils></FaUtensils> </button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddItems;