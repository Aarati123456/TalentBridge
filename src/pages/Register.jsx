const handleSubmit = (e) => {
  e.preventDefault();

  let newErrors = {};

  if (!formData.fullName.trim()) {
    newErrors.fullName = "Full name is required";
  }

  if (!formData.username.trim()) {
    newErrors.username = "Username is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Please enter a valid email";
  }

  if (!formData.password) {
    newErrors.password = "Password is required";
  } else if (formData.password.length < 8) {
    newErrors.password = "Password must be at least 8 characters";
  }

  if (!formData.confirmPassword) {
    newErrors.confirmPassword = "Confirm password is required";
  } else if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    alert("Registration Successful!");

    console.log(formData);

    setFormData({
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setErrors({});
  }
};  
return (

<div className="min-h-screen ...">

...
return (

  <div className="min-h-screen">

    <div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >

        {/* यहाँ Full Name */}

        {/* यहाँ Username */}

        {/* यहाँ Email */}

        {/* यहाँ Password */}

        {/* यहाँ Confirm Password */}

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
          "
        >
          Create Account
        </button>

        <p className="text-center mt-5">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 ml-2 font-semibold"
          >
            Login
          </Link>

        </p>

      </form>

    </div>

  </div>

);

export default Register;