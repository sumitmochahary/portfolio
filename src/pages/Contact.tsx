const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 font-mono">
            <span className="text-green-400">$</span> echo "Contact Me"
          </h2>
        </div>

        <div className="bg-gray-950 rounded-lg border border-gray-800 p-6">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-mono text-gray-400"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                autoComplete="name"
                className="mt-1 px-4 py-2 bg-gray-900 border border-gray-700 text-gray-100 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-mono text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="mt-1 px-4 py-2 bg-gray-900 border border-gray-700 text-gray-100 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-mono text-gray-400"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="mt-1 px-4 py-2 bg-gray-900 border border-gray-700 text-gray-100 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-green-600 text-gray-900 px-6 py-2 rounded font-bold hover:bg-green-500 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
