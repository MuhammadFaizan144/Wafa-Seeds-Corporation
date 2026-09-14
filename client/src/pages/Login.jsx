import { Link } from "react-router-dom";
import { LuArrowRight, LuEye, LuEyeOff, LuLockKeyhole, LuMail } from "react-icons/lu";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user,setUser]=useState({
    email:'',
    password:''
  })
  const handleInput=(e)=>{
    console.log(e);
    let name=e.target.name;
    let value=e.target.value;
    setUser({
      ...user,
      [name]:value
    })

  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(user)
    try {
      const response=await fetch(`http://localhost:3000/api/auth/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify()
      })
      console.log(response)
    } catch (error) {
      console.log("Login",error)
    }
  }

  return (
    <main className="min-h-screen bg-[#FAFAF7]">

      {/* Main Login Section */}
      <section className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}
        <div className="relative hidden overflow-hidden bg-[#1E9E4A] lg:flex">

          {/* Background Image */}
          <img
            src="/images/login/bg.jpg"
            alt="Wafa Seeds agriculture"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Green Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#171D17]/90 via-[#1E9E4A]/30 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

            {/* Logo */}
            <Link to="/" className="w-fit">
              <div className="flex items-center gap-3">

                <div className="flex size-11 items-center justify-center rounded-xl bg-white">
                  <span className="text-xl font-bold text-[#1E9E4A]">
                    W
                  </span>
                </div>

                <div>
                  <h1 className="text-xl font-bold tracking-wide text-white">
                    WAFA SEEDS
                  </h1>

                  <p className="text-xs tracking-[0.2em] text-white/70">
                    GROWING TOGETHER
                  </p>
                </div>

              </div>
            </Link>

            {/* Bottom Content */}
            <div className="max-w-xl">

              <div className="mb-5 inline-flex rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
                <span className="text-sm font-medium text-white">
                  Growing better. Growing together.
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-[1.1] text-white xl:text-5xl">
                Quality seeds for a
                <span className="text-[#F5821F]"> better harvest.</span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-white/75">
                Access your Wafa Seeds account to explore premium seed
                varieties, agricultural solutions, product information,
                and more.
              </p>

            </div>

          </div>
        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="flex min-h-screen items-center justify-center bg-[#FAFAF7] px-5 py-12 sm:px-8 lg:px-12">

          <div className="w-full max-w-[480px]">

            {/* Mobile Logo */}
            <div className="mb-10 flex justify-center lg:hidden">
              <Link to="/" className="flex items-center gap-3">

                <div className="flex size-11 items-center justify-center rounded-xl bg-[#1E9E4A]">
                  <span className="text-xl font-bold text-white">
                    W
                  </span>
                </div>

                <div>
                  <h1 className="text-xl font-bold tracking-wide text-[#171D17]">
                    WAFA SEEDS
                  </h1>

                  <p className="text-xs tracking-[0.2em] text-[#3E4A3E]">
                    GROWING TOGETHER
                  </p>
                </div>

              </Link>
            </div>


            {/* Heading */}
            <div className="mb-8">

              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-[#1E9E4A1A]">
                <LuLockKeyhole className="text-xl text-[#1E9E4A]" />
              </div>

              <h2 className="text-3xl font-bold leading-tight text-[#171D17] sm:text-4xl">
                Welcome back
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#3E4A3E] sm:text-base">
                Sign in to your Wafa Seeds account to continue.
              </p>

            </div>


            {/* Login Card */}
            <form onSubmit={handleSubmit} className="rounded-2xl border border-[#BDCABA4D] bg-white p-6 shadow-[0_10px_40px_rgba(23,29,23,0.06)] sm:p-8">

              {/* Email */}
              <div className="mb-5">

                <label
                  // htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#171D17]"
                >
                  Email Address
                </label>

                <div className="relative">

                  <LuMail className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#3E4A3E]/60" />

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    name="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                    className="h-10 w-full rounded-lg border border-[#BDCABA] bg-[#FAFAF7] pl-12 pr-4  text-sm text-[#171D17] outline-none transition placeholder:text-[#3E4A3E]/45 focus:border-[#1E9E4A] focus:ring-4 focus:ring-[#1E9E4A1A]"
                  />

                </div>

              </div>


              {/* Password */}
              <div className="mb-4">

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-[#171D17]"
                  >
                    Password
                  </label>

                </div>

                <div className="relative">

                  <LuLockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#3E4A3E]/60" />

                  <input
                    id="password"
                    name="password"
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                    className="h-10 w-full rounded-lg border border-[#BDCABA] bg-[#FAFAF7] pl-12 pr-12 text-sm text-[#171D17] outline-none transition placeholder:text-[#3E4A3E]/45 focus:border-[#1E9E4A] focus:ring-4 focus:ring-[#1E9E4A1A]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3E4A3E]/60 transition hover:text-[#1E9E4A]"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <LuEyeOff className="text-lg" />
                    ) : (
                      <LuEye className="text-lg" />
                    )}
                  </button>

                </div>

              </div>


              


              {/* Login Button */}
              <button
                type="submit"
                className="group flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#1E9E4A] px-6 text-sm font-bold tracking-wide text-white transition hover:bg-[#17863E] active:scale-[0.99]"
              >
                Sign In

                <LuArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>


            </form>


            {/* Bottom Message */}
            <div className="mt-8 text-center">

              <p className="text-xs leading-5 text-[#3E4A3E]/70">
                By signing in, you agree to our{" "}
                <Link
                  to="/terms"
                  className="font-medium text-[#1E9E4A] hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="font-medium text-[#1E9E4A] hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Login;