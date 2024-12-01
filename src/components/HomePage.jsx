// src/components/HomePage.js
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <section
        className="hero bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
      >
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold">Welcome to Gorkha Martial Arts</h1>
          <p className="mt-4">Join the best martial arts training in town</p>
          <Link
            to="/membership"
            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 mt-4 inline-block"
          >
            Join Now
          </Link>
        </div>
      </section>

      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p>We offer a variety of martial arts classes and fitness training.</p>
        <p>
          Our team of expert trainers will guide you through every step of your
          martial arts journey.
        </p>
      </section>

      <section className="container mx-auto py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Classes We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">Jiu-Jitsu</h3>
            <p>Learn the art of ground combat and self-defense.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">Karate</h3>
            <p>Master the traditional martial art of Karate.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold">Muay Thai</h3>
            <p>Strike with precision and power through Muay Thai.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
