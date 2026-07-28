import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserRound
} from "lucide-react";

function Register() {

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const [errors, setErrors] = useState({});


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    let newErrors = {};


    if(!formData.fullName){
      newErrors.fullName = "Full name is required";
    }

    if(!formData.username){
      newErrors.username = "Username is required";
    }

    if(!formData.email){
      newErrors.email = "Email is required";
    }

    if(!formData.password){
      newErrors.password = "Password is required";
    }

    if(formData.password !== formData.confirmPassword){
      newErrors.confirmPassword = "Password does not match";
    }


    setErrors(newErrors);


    if(Object.keys(newErrors).length === 0){

      console.log(formData);

    }

  };


  return (

    <div className="
    min-h-screen 
    bg-gradient-to-r 
    from-blue-700 
    via-indigo-700 
    to-purple-700
    flex 
    items-center 
    justify-center
    p-6
    ">


      <div className="
      grid 
      lg:grid-cols-2 
      w-full 
      max-w-6xl
      bg-white 
      rounded-3xl 
      overflow-hidden 
      shadow-2xl
      ">


        {/* LEFT SIDE */}

        <div className="
        hidden 
        lg:flex 
        flex-col 
        justify-center 
        bg-gradient-to-br 
        from-blue-600 
        to-indigo-700 
        text-white 
        p-12
        ">


          <h1 className="text-4xl font-bold">
            TalentBridge
          </h1>


          <h2 className="
          text-3xl 
          font-bold 
          mt-6
          ">

            Join TalentBridge &
            <br/>
            Showcase Your Talent

          </h2>


          <p className="
          mt-4 
          text-lg 
          text-blue-100
          ">

            Connect with talented people 
            and showcase your skills.

          </p>



          {/* Illustration */}

          <div className="
          h-48 
          flex 
          items-center 
          justify-center 
          mt-8
          ">

            <UserRound size={140}/>

          </div>



          {/* Statistics */}

          <div className="
          flex 
          justify-between 
          mt-8
          ">


            <div>

              <h3 className="text-3xl font-bold">
                10K+
              </h3>

              <p>
                Users
              </p>

            </div>



            <div>

              <h3 className="text-3xl font-bold">
                5K+
              </h3>

              <p>
                Talents
              </p>

            </div>



            <div>

              <h3 className="text-3xl font-bold">
                50+
              </h3>

              <p>
                Categories
              </p>

            </div>


          </div>


        </div>





        {/* RIGHT SIDE */}

        <div className="
        p-8 
        md:p-12
        ">


          <h2 className="
          text-3xl 
          font-bold 
          text-gray-800
          ">

            Create Your Account

          </h2>


          <p className="
          text-gray-500 
          mt-2
          ">

            Join TalentBridge today

          </p>



          <form 
          onSubmit={handleSubmit}
          className="
          mt-8 
          space-y-4
          ">



            {/* Full Name */}

            <div>

              <div className="relative">

                <User 
                className="
                absolute 
                left-3 
                top-3 
                text-gray-400
                "
                size={20}
                />


                <input

                type="text"
                name="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleChange}

                className="
                w-full 
                rounded-xl 
                border 
                border-gray-300 
                px-10 
                py-3
                "

                />

              </div>


              <p className="text-red-500 text-sm">
                {errors.fullName}
              </p>

            </div>





            {/* Username */}

            <div className="relative">

              <UserRound
              className="absolute left-3 top-3 text-gray-400"
              size={20}
              />


              <input

              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}

              className="
              w-full 
              rounded-xl 
              border 
              border-gray-300 
              px-10 
              py-3
              "

              />


            </div>






            {/* Email */}

            <div className="relative">


              <Mail
              className="absolute left-3 top-3 text-gray-400"
              size={20}
              />


              <input

              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}

              className="
              w-full 
              rounded-xl 
              border 
              border-gray-300 
              px-10 
              py-3
              "

              />


            </div>






            {/* Password */}

            <div className="relative">


              <Lock
              className="absolute left-3 top-3 text-gray-400"
              size={20}
              />


              <input

              type={showPassword ? "text" : "password"}

              name="password"

              placeholder="Password"

              value={formData.password}

              onChange={handleChange}


              className="
              w-full 
              rounded-xl 
              border 
              border-gray-300 
              px-10 
              py-3
              "

              />



              <button

              type="button"

              onClick={() =>
                setShowPassword(!showPassword)
              }

              className="
              absolute 
              right-3 
              top-3
              "

              >

              {
                showPassword ?
                <EyeOff size={20}/>
                :
                <Eye size={20}/>
              }


              </button>


            </div>





            {/* Confirm Password */}


            <div className="relative">


              <Lock
              className="absolute left-3 top-3 text-gray-400"
              size={20}
              />


              <input


              type={
                showConfirmPassword 
                ? "text" 
                : "password"
              }


              name="confirmPassword"

              placeholder="Confirm Password"

              value={formData.confirmPassword}

              onChange={handleChange}


              className="
              w-full 
              rounded-xl 
              border 
              border-gray-300 
              px-10 
              py-3
              "

              />



              <button

              type="button"

              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }


              className="
              absolute 
              right-3 
              top-3
              "

              >


              {
                showConfirmPassword ?
                <EyeOff size={20}/>
                :
                <Eye size={20}/>
              }


              </button>



            </div>


            <p className="text-red-500 text-sm">
              {errors.confirmPassword}
            </p>





            {/* Button */}


            <button

            type="submit"

            className="
            w-full
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            py-3
            text-white
            font-semibold
            transition
            "

            >

              Create Account

            </button>





            <p className="
            text-center 
            text-gray-600 
            mt-5
            ">


              Already have an account?


              <a

              href="/login"

              className="
              text-blue-600 
              font-semibold 
              ml-2
              "

              >

                Login

              </a>


            </p>



          </form>


        </div>


      </div>


    </div>

  );
}


export default Register;