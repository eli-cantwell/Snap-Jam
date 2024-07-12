// import { Link } from 'react-router-dom'
// import { useGetAllProjects } from '../hooks/useUsers'

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-slate-300 py-20 text-center">
        <div className="container mx-auto">
          <h1 className="mb-6 text-5xl font-bold">Welcome!</h1>
          <p className="mb-8 text-lg">
            Snap Jam is a platform where you can create, colaberate, and share your
            creativity harmoniously.
          </p>
          <a
            href="#features"
            className="rounded-md bg-white px-4 py-2 font-medium text-slate-700 shadow-md duration-100 ease-in-out hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-semibold">Breakdown</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-slate-300 bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Create and Colaberate
            </h3>
            <p>
              Share your unfinished audio file for other users, or browse our
              shared media and finish someone elses!
            </p>
          </div>
          <div className="rounded-lg border border-slate-300 bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Compatability</h3>
            <p>
              Choose the tempo of your audio file to ensure seamless
              collaberation.
            </p>
          </div>
          <div className="rounded-lg border border-slate-300 bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Feature Three</h3>
            <p>
              We emphasize the community aspect of SnapJam where users can learn
              from each other, improve their skills, and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-3xl font-semibold">
            About The SnapJam Team
          </h2>
          <p className="mx-auto max-w-3xl text-center">
            The SnapJam developer team has been passionately working on creating
            an original, creative community driven platform that empowers
            artists to showcase their talent, collaborate with like-minded
            individuals, and take their music to the next level. With SnapJam,
            we aim to foster a supportive environment that sparks creativity,
            learning, and growth. Join our vibrant community today and be a part
            of something amazing!{' '}
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-semibold">
          Testimonials
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-slate-300 bg-white p-6 shadow-lg">
            <p className="italic">
              SnapJam has completely changed the way I create music. The
              collaboration tools are top-notch!
            </p>
            <p className="mt-4 text-right font-semibold">
              - Alex, Music Producer
            </p>
          </div>
          <div className="rounded-lg border border-slate-300 bg-white p-6 shadow-lg">
            <p className="italic">
              The community aspect of SnapJam is incredible. I&apos;ve learned
              so much from other users.
            </p>
            <p className="mt-4 text-right font-semibold">
              - Jamie, Audio Engineer
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="bg-gradient-to-br from-blue-200 to-[#5ac0d9] py-16 text-center"
      >
        <div className="container mx-auto">
          <h2 className="mb-6 text-3xl font-semibold">
            Ready to join SnapJam?
          </h2>
          <p className="mb-8 text-lg">
            Click here to start collaborating with musicians from all over the
            world.
          </p>
          <Link
            to="/create"
            className="rounded-md bg-white px-4 py-2 font-medium text-slate-700 shadow-md duration-100 ease-in-out hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="rounded-lg border border-slate-300 bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              How does SnapJam work?
            </h3>
            <p>
              SnapJam allows users to upload their audio files, set the tempo,
              and collaborate with other users to create and finish projects.
            </p>
          </div>
          <div className="rounded-lg border border-slate-300 bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Is SnapJam free to use?
            </h3>
            <p>
              Yes, SnapJam offers a free tier with access to basic features. We
              also offer premium plans for advanced features.
            </p>
          </div>
          <div className="rounded-lg border border-slate-300 bg-white p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Can I collaborate with anyone on SnapJam?
            </h3>
            <p>
              Absolutely! SnapJam is designed to make collaboration easy,
              whether you&apos;re working with friends or connecting with new
              musicians.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-200 to-[#5ac0d9] py-4 text-center">
        <p className="text-gray-700">
          © {new Date().getFullYear()} SnapJam. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
