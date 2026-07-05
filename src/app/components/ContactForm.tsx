import { useState } from "react";

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("form is using new code");

    const formData = new FormData(e.currentTarget);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setShowSuccess(true);
      e.currentTarget.reset();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="hidden"
          name="access_key"
          value="38e0b390-6d79-4e7b-8753-a902507bfb90"
        />

        <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>

        <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white" />

        <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white" />

        <input type="text" name="subject" placeholder="Subject" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white" />

        <textarea name="message" placeholder="Message" rows={6} required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white" />

        <button type="submit" className="bg-[#eb2627] hover:bg-red-700 text-white px-8 py-3 rounded transition duration-300">
          Send Message
        </button>
      </form>

      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Message Sent Successfully
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for contacting Le Premier Group. We will get back to you soon.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-[#eb2627] text-white px-8 py-3 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}