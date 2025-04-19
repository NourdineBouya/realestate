import Image from 'next/image'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left - Contact Form */}
      <div className="flex-1 p-8 md:p-16 flex items-center justify-center">
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-bold text-black mb-6">Let’s get in touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions, suggestions, or just want to say hello? Fill out the form below and we’ll get back to you soon.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us what’s on your mind..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white rounded-xl py-3 font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Right - Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="https://images.pexels.com/photos/7599735/pexels-photo-7599735.jpeg"
          alt="Contact"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default ContactPage
