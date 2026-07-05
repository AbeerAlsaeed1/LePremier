export default function ContactForm() {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="space-y-6"
    >
      <input
        type="hidden"
        name="access_key"
        value="38e0b390-6d79-4e7b-8753-a902507bfb90"
      />

      <h2 className="text-3xl font-bold text-white mb-6">
        Contact Us
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white"
      />

      <textarea
        name="message"
        placeholder="Message"
        rows={6}
        required
        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white"
      />

      <button
        type="submit"
        className="bg-[#eb2627] hover:bg-red-700 text-white px-8 py-3 rounded transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
}