// src/components/ContactPage.js
const ContactPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        <iframe
          className="w-full h-64"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095433!2d144.96305781531615!3d-37.81410797975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ceed0!2sVictoria%20Square!5e0!3m2!1sen!2sau!4v1632995089562!5m2!1sen!2sau"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
