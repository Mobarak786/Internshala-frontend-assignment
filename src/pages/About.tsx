import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-white  py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Community gathering"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center">
                About Communion
              </h1>
            </div>
          </div>

          <div className="px-8 py-12">
            <div className="max-w-3xl mx-auto space-y-8">
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Communion was founded with a simple yet powerful vision: to
                  create a platform where people of different faiths and
                  backgrounds can come together, share experiences, and build
                  meaningful connections. We believe that understanding and
                  respect grow through personal interactions and shared
                  experiences.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  What We Do
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-primary-600 mb-2">
                      Connect
                    </h3>
                    <p className="text-gray-600">
                      Bringing together individuals from diverse backgrounds and
                      beliefs.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-primary-600 mb-2">
                      Share
                    </h3>
                    <p className="text-gray-600">
                      Creating opportunities for cultural and spiritual
                      exchange.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-primary-600 mb-2">
                      Grow
                    </h3>
                    <p className="text-gray-600">
                      Fostering understanding and personal growth through
                      community events.
                    </p>
                  </div>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Join Our Community
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're looking to explore different faiths, share your
                  own traditions, or simply connect with others in your
                  community, Communion provides the platform and opportunities
                  to make it happen. Join us in building bridges of
                  understanding and friendship across different faiths and
                  cultures.
                </p>
              </motion.section>
            </div>
          </div>
        </motion.div>
      </div>
      <p className="text-center mt-5">Created with love 💌 by mobarak ansary</p>
      <p className="text-center mb-5 mt-5 underline">
        <a href="https://mobarak-portfolio.netlify.app" target="blank">
          🌏 user portfolio
        </a>
      </p>
    </div>
  );
}
