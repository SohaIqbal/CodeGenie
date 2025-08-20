import { IoIosArrowRoundBack } from "react-icons/io";
import axios from '../../../config/axios'
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
// import png from '../../../assets/google.png'
// import { useThemeContext } from "../../../context/ThemeContext";




export default function LoginIn() {
  const [showPassword, setShowPassword] = useState(false);
 


  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  // const { darkMode, toggleDarkMode } = useThemeContext();


  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [fullname, setfullname] = useState('')
  const [error, seterror] = useState()
  const [success, setsuccess] = useState('')
  const [isSignup, setIsSignup] = useState(false);





  const navigate = useNavigate()
 const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const showSignup = queryParams.get('signup') === 'true';


useEffect(() => {
    setIsSignup(showSignup);
  }, [showSignup]);


  const submitHandlerlogin = async (e) => {
    e.preventDefault();
    seterror("")
    setsuccess("")
      console.log("LOGIN DATA:", {
  fullname: fullname,
  email: email,
  password: password
});

    axios.post('/user/login', {
      email: email,
      password: password
    },

    ).then((res) => {
      localStorage.setItem("token", res.data.token);
      navigate("/code-review",{ replace: true });
      console.log(res.data)
      setsuccess("Login successful")
      //-----------------------------------




    }).catch((err) => {
      console.log(err)
      seterror("Your email or password is incorrect. Try again")


    })


  }


   const submitHandlersignup = async (e) => {
        e.preventDefault();

        console.log("SIGNUP DATA:", {
  fullname: fullname,
  email: email,
  password: password
});

       
         axios.post('/user/signup', {
          fullname: fullname,
          email: email,
          password: password
        }).then((res) => {
          localStorage.setItem("token", res.data.token);
          navigate('/code-review')
        
          console.log(res.data)
  
    
    
          
    
        }).catch((err) => {
          console.log(err)
        
        if (err.response && err.response.data.message) {
            seterror(err.response.data.message); 
        } 
        if(password.length < 6){
          seterror("Password should be at least 6 characters long")
  
        }
      
       
    
        
  
        })
  
  
    
      }
  


const toggleForm = () => {
  setIsSignup(prev => !prev);
  setemail("");
  setpassword("");
};
  // useEffect(() => {
  //   // Listen for the Google sign-in success
  //   window.gapi.load('auth2', () => {
  //     window.gapi.auth2.init({
  //       client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google OAuth client ID
  //     });
  //   });
  // }, []);

 



  return (
    <>
    
       

      <div className={`flex h-full overflow-y-hidden  flex-col dark:bg-secondary justify-center `} >
         <a href="/" className="   w-[3vw]">

          <IoIosArrowRoundBack className=" dark:bg-secondary dark:text-gray-300 mt-2 text-[2.1vw] font-bold ml-8 " />
        </a>

        {error && ( // Show error message if error exists
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-0 rounded relative mb-4" role="alert">
            <strong className="font-bold">Oops!</strong>
            <span className="block sm:inline"> {error} </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={() => seterror("")}>
              <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}

        {success && ( // Show error message if error exists
          <div className="bg-green-400 border border-green-400 text-green-900 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Login Successfully!</strong>
            <span className="block sm:inline"> {error} </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={() => setsuccess("")}>
              <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}



  <div className=" w-full h-full  overflow-hidden flex">
          <div className="w-[60%] h-screen flex items-center justify-center pb-28 text-5xl font-bold font-poppinsSemiBold gradient-text1 bg-[#e0e0e7]  ">
            Get instant solutions.
            
          </div>
          <div className="w-[50%] relative py-28 h-full">
             <h1 className='tracking-widest font-opensans absolute top-10 text-4xl left-44 font-semibold text-black'>C<span className='text-[#3730A3]'>✦</span>DE GENIE.</h1> 
           

           {isSignup ? (
            <>
             <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                  <h2 className="mt-5 text-center font-poppinsRegular tracking-wider  text-lg dark:text-gray-400 font-bold dark:bg-secondary bg-white text-[#15213f] ">
                    Sign in to your account
                  </h2>
                </div>
        
                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form action="#" method="POST" className="space-y-3" onSubmit={submitHandlersignup}>

                     <div>
                      <label htmlFor="name" className="block font-poppinsRegular dark:text-gray-400 text-sm/6 font-medium  text-gray-900">
                        Full name
                      </label>
                      <div className="mt-2">
                        <input
                         onChange={(e) => setfullname(e.target.value)}
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          className="block w-full rounded-md bg-gray-100 border-[1px] border-gray-200 px-3 py-1.5 text-base text-gray-900  outline-gray-200 placeholder:text-gray-400  sm:text-sm/6"
                        />
                      </div>
                    </div>


                    <div>
                      <label htmlFor="email" className="block font-poppinsRegular dark:text-gray-400 text-sm/6 font-medium  text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                         onChange={(e) => setemail(e.target.value)}
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="block w-full rounded-md bg-gray-100 border-[1px] border-gray-200 px-3 py-1.5 text-base text-gray-900  outline-gray-200 placeholder:text-gray-400  sm:text-sm/6"
                        />
                      </div>
                    </div>
        
                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block font-poppinsRegular dark:text-gray-400 text-sm/6 font-medium text-gray-900">
                          Password
                        </label>
                       
                        
                        
                      </div>
                   
                     <div className="mt-2 relative  ">
                        <input
                          onChange={(e) => setpassword(e.target.value)}
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          required
                          autoComplete="current-password"
                          className="block w-full rounded-md font-poppinsRegular bg-gray-100 border-[1px] border-gray-200 px-3 py-1.5 text-base text-gray-900  outline-gray-200 placeholder:text-gray-400  sm:text-sm/6"
                        />
                        
                        <div className={` pl-1 absolute top-2 right-0 mr-3  `} onClick={handlePasswordVisibility}>
                          {showPassword ? (
                            <VisibilityOffOutlinedIcon className="text-gray-500 " />
        
                          ) : (
                            <VisibilityOutlinedIcon className="text-gray-500" />
                          )}
                        </div>
                        
                        
                      </div>
                      
                   
                     
                    </div>
        
                    <div>
                      <button
                        type="submit"
                        className=" mt-8 flex w-full font-poppinsRegular justify-center tracking-wider  rounded-md bg-[#15213f] transition-all ease-in-out duration-200 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
        
                  <p className="mt-5 text-center font-poppinsRegular text-sm text-gray-500">
                    Already have an account?{' '}
                    <button onClick={toggleForm}  className="font-semibold font-poppinsRegular text-indigo-600 hover:text-indigo-500">
                      Login here
                    </button>
                  </p >
        
               
                </div>
            </>

           ) :(
            <>
              <div className="sm:mx-auto sm:w-full  dark:bg-secondary sm:max-w-sm">
      
          <h2 className="mt-8 text-center font-poppinsRegular tracking-wider  text-lg dark:text-gray-400 font-bold dark:bg-secondary bg-white text-[#15213f] ">
            Login to your account
            
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={submitHandlerlogin}>
            <div>
              <label htmlFor="email" className="block font-poppinsRegular text-sm/6 dark:text-gray-400 font-medium  text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setemail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-gray-100 border-[1px] border-gray-200 px-3 py-1.5 text-base text-gray-900  outline-gray-200 placeholder:text-gray-400  sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block font-poppinsRegular dark:text-gray-400 text-sm/6 font-medium text-gray-900">
                  Password
                </label>
               
               
              </div>
              <div className="mt-2 relative">
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-gray-100 border-[1px] border-gray-200 px-3 py-1.5 text-base text-gray-900  outline-gray-200 placeholder:text-gray-400  sm:text-sm/6"
                />

                <div className={` pl-1 absolute top-2 right-0 mr-3  `} onClick={handlePasswordVisibility}>
                  {showPassword ? (
                    <VisibilityOffOutlinedIcon className="text-gray-500 " />

                  ) : (
                    <VisibilityOutlinedIcon className="text-gray-500" />
                  )}
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"

                className="flex w-full  transition-all ease-in-out duration-200 tracking-wider justify-center font-poppinsRegular rounded-md bg-[#15213f]  px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-5 text-center font-poppinsRegular text-sm/6 text-gray-500">
            Don't have an account?{' '}
            <button onClick={toggleForm} className="font-semibold font-poppinsRegular text-[#15213f] dark:text-indigo-600  hover:text-indigo-500">
              Signup here
            </button>

           
          </p>
        </div>
            </>
           ) }
        




          </div>
        </div>

  

    
      </div>

      


    </>
  )
}








   