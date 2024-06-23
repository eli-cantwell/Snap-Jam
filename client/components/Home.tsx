import { Link } from 'react-router-dom'
import { useGetAllProjects } from '../hooks/useUsers'

export default function Home() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-200 to-[#5ac0d9] text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to YourSiteName</h1>
          <p className="text-lg mb-8">A platform where you can create, manage, and share your projects seamlessly.</p>
          <a href="#features" className="bg-white text-slate-700 font-medium py-2 px-4 rounded-md hover:scale-105 shadow-md ease-in-out duration-100">Learn More</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-300 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Feature One</h3>
            <p>Detail about feature one that makes your platform unique and valuable.</p>
          </div>
          <div className="bg-white border border-slate-300 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
            <p>Detail about feature two that enhances user experience and productivity.</p>
          </div>
          <div className="bg-white border border-slate-300 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
            <p>Detail about feature three that sets your platform apart from the competition.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">About Us</h2>
          <p className="max-w-3xl mx-auto text-center">YourSiteName is dedicated to providing the best platform for project management and collaboration. Our mission is to make project management seamless and enjoyable for everyone.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Contact Us</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="mt-1 p-2 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="mt-1 p-2 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="mt-1 p-2 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows='4'
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="w-24 bg-white text-slate-700 font-medium py-2 rounded-md hover:scale-105 shadow-md ease-in-out duration-100">Submit</button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-200 to-[#5ac0d9] text-center py-4">
        <p className="text-gray-700">© {new Date().getFullYear()} YourSiteName. All rights reserved.</p>
      </footer>
    </div>
  );
 
}