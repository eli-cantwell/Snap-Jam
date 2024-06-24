import { Link } from 'react-router-dom'
import { useGetAllProjects } from '../hooks/useUsers'

export default function Home() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-200 to-[#5ac0d9] text-center py-10">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-6">Welcome!</h1>
          <p className="text-lg mb-8">A platform where you can create, colaberate, and share your creativity harmoniously.</p>
          <a href="#features" className="bg-white text-slate-700 font-medium py-2 px-4 rounded-md hover:scale-105 shadow-md ease-in-out duration-100">Learn More</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Breakdown</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-300 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Create and Colaberate</h3>
            <p>Share your unfinished audio file for other users, or browse our shared media and finish someone elses!</p>
          </div>
          <div className="bg-white border border-slate-300 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Compatability</h3>
            <p>Choose the tempo of your audio file to ensure seamless collaberation.</p>
          </div>
          <div className="bg-white border border-slate-300 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
            <p>We emphasize the community aspect of SnapJam where users can learn from each other, improve their skills, and grow together.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">About The SnapJam Team</h2>
          <p className="max-w-3xl mx-auto text-center">The SnapJam developer team has been passionately working on creating an original, creative community driven platform that empowers artists to showcase their talent, collaborate with like-minded individuals, and take their music to the next level. With SnapJam, we aim to foster a supportive environment that sparks creativity, learning, and growth. Join our vibrant community today and be a part of something amazing! </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-200 to-[#5ac0d9] text-center py-4">
        <p className="text-gray-700">© {new Date().getFullYear()} SnapJam. All rights reserved.</p>
      </footer>
    </div>
  );
 
}