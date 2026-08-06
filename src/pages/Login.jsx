import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  X,
  CheckCircle2,
} from "lucide-react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});
    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
    const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Login Successful!");
      console.log(formData);
    }
  };
    return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-6">

      <div className="relative w-full max-w-[520px] bg-white rounded-[24px] shadow-2xl shadow-slate-300/60 p-10">
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close"
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon + Heading */}
        <div className="flex flex-col items-center text-center gap-4 mb-10">
          <div className="w-[72px] h-[72px] rounded-full bg-blue-600 flex items-center justify-center shadow-xl shadow-blue-600/30">
            <Lock className="text-white w-8 h-8" />
          </div>

          <div>
            <h1 className="text-5xl font-bold text-gray-900">
              Welcome Back
            </h1>

            <p className="text-gray-500 text-lg mt-2">
              Login to your account
            </p>
          </div>

        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
{/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full h-14 rounded-xl border border-gray-300 py-3 px-4 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-slate-50 focus:bg-white transition-colors"
              />
            </div>
            {errors.email ? (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            ) : formData.email ? (
              <p className="text-green-500 text-sm mt-2">Email looks good!</p>
            ) : null}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full h-14 rounded-xl border border-gray-300 py-3 pl-4 pr-12 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-slate-50 focus:bg-white transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password ? (
              <p className="text-red-500 text-sm mt-2">{errors.password}</p>
            ) : formData.password ? (
              <p className="text-green-500 text-sm mt-2">Password is valid</p>
            ) : null}
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between pt-3 pb-1 mb-3">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600 accent-blue-600"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-lg font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:shadow-xl hover:shadow-blue-600/30"
          >
            <Lock className="w-5 h-5 text-white" />
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 py-1">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full h-14 rounded-xl border border-gray-300 text-gray-700 text-lg font-semibold flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <p className="text-center pt-2 text-gray-600">
            Don't have an account?
            <Link to="/register" className="text-blue-600 ml-2 font-semibold hover:text-blue-700">
              Register here
            </Link>
          </p>
        </form>

        {/* Footer */}
        <p className="flex items-center justify-center gap-2 text-center text-xs text-gray-400 mt-8">
          <ShieldCheck className="w-4 h-4 text-green-500" />
          Your data is safe and secure with us.
        </p>
      </div>
    </div>
  );
}

export default Login;
