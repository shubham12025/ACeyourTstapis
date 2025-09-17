import React, { useState } from "react";
import axios from "axios"; // ✅ axios import
import Footer from "./Footer";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    message: "",
    agree: true, // ✅ By default checked
  });

  const [loading, setLoading] = useState(false); // ✅ Loader state
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/book-consultation",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        setSuccess("Form submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          city: "",
          message: "",
          agree: true,
        });
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-16 font-sans">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* ---------- Left Side Content ---------- */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              Ready to Crack Your <br /> Dream Score?
            </h2>
            <p className="text-gray-600 mt-4 max-w-md">
              Stop wandering in circles. Get proven direction and speed-up your
              prep.
            </p>
          </div>

          {/* ---------- Right Side Form ---------- */}
          <div className="flex-1">
            <div className="bg-white shadow-md border-2 border-[#081F3D] rounded-xl p-6 w-full max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-center mb-6">
                Book For Consultation
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name*"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number*"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Select City"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>

                {/* Checkbox (Always Checked & Disabled) */}
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={true}
                    disabled
                    className="h-4 w-4 text-blue-600"
                  />
                  <span>
                    By submitting, you agree to our{" "}
                    <a
                      href="/privacy-policy"
                      className="text-blue-600 underline"
                    >
                      Terms & Privacy Policy
                    </a>.
                  </span>
                </div>

                {/* Success / Error Message */}
                {success && <p className="text-green-600 text-sm">{success}</p>}
                {error && <p className="text-red-600 text-sm">{error}</p>}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#041C3C] text-white py-2.5 px-4 rounded-md hover:bg-[#062a59] transition disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConsultationForm;
