import React from "react";

export default function LoginContent({ onClose }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, remember });
    alert("Login functionality demo");
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-40" onClick={onClose} />

      {/* Modal Wrapper */}
      <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center overflow-y-auto py-6">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl relative mx-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
          >
            ✕
          </button>

          {/* Content */}
          <div className="px-5 py-8 md:px-8 md:py-8">
            {/* Heading */}
            <div className="text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Sign in for faster checkout
              </h1>
              <p className="text-sm md:text-base font-medium text-gray-700">
                Sign in to Apple Store
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="input-field bg-gray-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="input-field bg-gray-200 transition-all focus:ring-2 focus:ring-[#0071e3]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-[#0071e3] focus:ring-[#0071e3]"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember me
                </label>

                <a href="#" className="text-[#0066cc] hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="btn-submit text-white bg-[#454545] rounded-3xl text-base w-full py-2.5"
              >
                Sign In
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-2 text-sm">
                Don’t have an Apple ID?
              </p>
              <button
                onClick={onClose}
                className="text-[#0066cc] hover:underline text-sm"
              >
                Create yours account now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
