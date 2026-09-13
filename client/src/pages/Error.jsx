import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen bg-[#f7f9f4] flex items-center justify-center px-6 overflow-hidden">
      <div className="relative w-full max-w-4xl text-center">

        {/* Decorative background circles */}
        <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-green-100/60 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-lime-100/60 blur-3xl" />

        <div className="relative z-10">

          {/* Brand */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-green-800">
              WAFA<span className="text-lime-600">SEED</span>
            </h2>
          </div>

          {/* 404 */}
          <div className="relative select-none">
            <h1 className="text-[140px] sm:text-[190px] md:text-[240px] leading-none font-black tracking-tighter text-green-800/10">
              404
            </h1>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl sm:text-9xl md:text-[150px] font-black tracking-tighter text-green-800">
                404
              </span>
            </div>
          </div>

          {/* Message */}
          <div className="mt-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Page Not Found
            </h3>

            <p className="mt-4 max-w-xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed">
              The page you're looking for may have been moved, removed,
              or doesn't exist anymore.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                         px-7 py-3.5 rounded-xl
                         bg-green-700 text-white font-semibold
                         shadow-lg shadow-green-700/20
                         hover:bg-green-800
                         hover:-translate-y-0.5
                         transition-all duration-300"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>

              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2
                         px-7 py-3.5 rounded-xl
                         border border-gray-300
                         bg-white text-gray-700 font-semibold
                         hover:border-green-600
                         hover:text-green-700
                         hover:-translate-y-0.5
                         transition-all duration-300"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5" />
                <polyline points="12 19 5 12 12 5" />
              </svg>

              Go Back
            </button>

          </div>

          {/* Bottom message */}
          <p className="mt-12 text-sm text-gray-400">
            Growing a better future with Wafa Seed.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Error;