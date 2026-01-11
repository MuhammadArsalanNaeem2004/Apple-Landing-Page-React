import React from "react";

export default function SignupContent({ onClose }) {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    birthday: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "United States",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup attempt:", formData);
    alert("Signup functionality demo");
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-40" onClick={onClose} />

      {/* Modal Wrapper */}
      <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center overflow-y-auto py-6">
        <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl relative mx-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
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
                Create Your Apple ID
              </h1>
              <p className="text-sm text-gray-600">
                One Apple ID is all you need to access all Apple services.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="input-field bg-gray-200"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="input-field bg-gray-200"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Birthday */}
              <div>
                <label className="block text-xs text-gray-500 mb-1 ml-1 uppercase font-semibold">
                  Birthday
                </label>
                <input
                  type="date"
                  name="birthday"
                  className="input-field bg-gray-200"
                  value={formData.birthday}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="pt-3 border-t border-gray-200">
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="input-field bg-gray-200 mb-1"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <p className="text-xs text-gray-500 ml-1">
                  This will be your new Apple ID.
                </p>
              </div>

              {/* Passwords */}
              <div className="space-y-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input-field bg-gray-200 transition-all focus:ring-2 focus:ring-[#0071e3]"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input-field bg-gray-200 transition-all focus:ring-2 focus:ring-[#0071e3]"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm text-gray-500 mb-1 ml-1">
                  Country / Region
                </label>
                <select
                  name="country"
                  className="input-field bg-gray-200"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Japan</option>
                </select>
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-gray-300 text-[#0071e3] focus:ring-[#0071e3]"
                />
                <p className="text-sm text-gray-600">
                  Subscribe to Apple emails for updates and announcements.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-submit text-white bg-[#454545] rounded-3xl text-base w-full py-2.5"
              >
                Continue
              </button>
            </form>

            {/* Footer */}
            <div className="mt-4 text-center">
              <button
                onClick={onClose}
                className="text-[#0066cc] hover:underline text-sm"
              >
                Already have an Apple ID? Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
