import React, { useState } from "react";

const DialogForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/book-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message || "Form submitted successfully!");
        setFormData({ name: "", phone: "", city: "", message: "" });
        onClose();
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-center mb-4">
            Book For Consultation
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="h-4 w-4 text-orange-600"
              />
              <span>
                By submitting, you agree to our{" "}
                <a href="/privacy-policy" className="text-orange-600 underline">
                  Terms & Privacy Policy
                </a>
                .
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 px-4 rounded-md font-medium transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DialogForm;
