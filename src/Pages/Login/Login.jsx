import loginImage from '../../assets/others/authentication2.png'
import bgimage from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
const Login = () => {
const {login} = useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()
const from = location?.state?.from?.pathname || '/'
    useEffect( ()=> {
   
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = e => {
        e.preventDefault()
        const form= e.target 
        const email = form.email.value;
        const password = form.password.value;
        const capcha = form.capcha.value;
        console.log(capcha);

        if (validateCaptcha(capcha) == true) {
           
        login(email, password)
        .then(result => {
          console.log(result.user);
          // navigate(location?.state ? location?.state : '/')
          navigate(from, {replace:true})
         
        })
        .catch( err => {
          console.log(err);
          alert(err.message)
        })
        }
   
        else {
          return  alert('Captcha Does Not Match');
        }
        console.log(email, password);

    }
    return (
        <div >
         
        <div className="hero min-h-screen " style={{backgroundImage: `url(${bgimage})`}}>
       
  <div className="max-w-full mx-auto flex items-center gap-26 border-2  shadow-2xl p-10">
    <div className="text-center lg:text-left">
     
    <img src={loginImage} alt="" />
    </div >
 
    <div className="card flex-shrink-0 w-full max-w-sm  ">
    <h1 className='text-center text-2xl font-semibold'>Login</h1>
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input " required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" name='capcha' placeholder="type the Captcha" className="input " required />
          {/* <button className="btn btn-outline btn-xs mt-1" onClick={handlevalidateCaptcha}>Default</button> */}
        </div>


        <div className="form-control mt-6">
            <input type="submit" value="LOGIN" className='bg-yellow-600 text-white py-3 rounded-md font-semibold' />
        </div>
        
      </form>
      <p className='text-center text-yellow-700'>---------Or----------</p>
     <div className='text-center'>
     <SocialLogin ></SocialLogin>
     </div>
      <Link to='/register' className='text-center text-yellow-600'>New here? Create a New Account </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;