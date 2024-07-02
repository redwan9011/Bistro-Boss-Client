import registerimage from '../../assets/others/authentication2.png'
import bgimage from '../../assets/others/authentication.png'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link,  useNavigate,  } from 'react-router-dom';
import {  updateProfile } from "firebase/auth";
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';



const Register = () => {
  const axiosPublic = useAxiosPublic()
const {signUp} = useContext(AuthContext)
const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
       
        signUp(data.email, data.password)
        .then( result => {
                 
                  updateProfile(result.user , {
                      displayName: data.name,
                      photoURL: data.photo
                  })
                  .then(()=> {

                    // create users entry in database
                    const usersInfo = {
                      name: data.name,
                      email: data.email,
                      photo: data.photo,
                    }
                    axiosPublic.post('/users', usersInfo)
                    .then( res => {
                      console.log( 'users added in database',res.data);
                      if(res.data.insertedId){
                        alert('sign up succesfully')
                      }
                    })
                  })
                  .catch(()=> {})
                 navigate('/')
              })
              .catch(err => {
                  console.log(err);
                  alert(err.message)
              })
      }
     

    

    // const handleRegister = e=> {
    //     e.preventDefault()
    //     const form= e.target 
    //     const email = form.email.value;
    //     const name = form.name.value;
    //     const password = form.password.value;
    //     console.log(email,name, password);

    //     signUp(email, password)
    //     .then( result => {
    //         console.log(result.data);
    //         updateProfile(result.user , {
    //             displayName: name
    //         })
    //         .then(()=> {})
    //         .catch(()=> {})

    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }
    return (
        <div >
         
        <div className="hero min-h-screen " style={{backgroundImage: `url(${bgimage})`}}>
       
  <div className="max-w-full mx-auto flex gap-26 border-2  shadow-2xl p-10">
    <div className="text-center lg:text-left">
     
    <img src={registerimage} alt="" />
    </div >
 
    <div className="card flex-shrink-0 w-full max-w-sm  ">
    <h1 className='text-center text-2xl font-semibold'>REGISTER</h1>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name"  , { required: true })} name='name' placeholder="your name" className="input " />
          {errors.name && <span className='text-red-500 mt-1'>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" {...register("photo"  , { required: true })} name='photo' placeholder="photo url" className="input " />
          {errors.photo && <span className='text-red-500 mt-1'>This field is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email")} name='email' placeholder="email" className="input " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password" , { required: true, minLength:6, maxLength: 20 ,

          pattern:/(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/
             
             })} name='password' placeholder="password" className="input " required />
          {errors.password?.type === 'minLength' && <span className='text-red-500 mt-1'>Password should be 6-20 letters</span>}
          {errors.password?.type === 'pattern' && <span className='text-red-500 mt-1'>Make password stronger</span>}

        </div>
       
        <div className="form-control mt-6">
            <input type="submit" value="REGISTER" className='bg-yellow-600 text-white py-3 rounded-md font-semibold' />
        </div>
      </form>
      <p className='text-center text-yellow-700'>---------Or----------</p>
     <div className='text-center'>
     <SocialLogin ></SocialLogin>
     </div>
      <Link to='/login' className='text-center text-yellow-600'>Already registered? Go to log in </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;