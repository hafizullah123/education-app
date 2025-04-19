const Contact = () => (
  <section className="p-10 max-w-lg mx-auto">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Your Message"
        className="w-full p-2 border rounded h-32"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </form>
  </section>
);

export default Contact;
