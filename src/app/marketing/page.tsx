import { useState } from 'react'
import { ArrowRight, User, GraduationCap, Clock, Users, MessageCircle, BarChart3, Percent, Zap, BarChart2, Rocket, Crown, Code, XCircle, CheckCircle } from 'lucide-react'

const CurvedArrow = ({ className, color }: { className?: string; color: string }) => (
  <svg className={className} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 90 Q 50 10 90 50" stroke={color} strokeWidth="2" fill="none" />
    <path d="M85 50 L 90 50 L 87 55" stroke={color} strokeWidth="2" fill="none" />
  </svg>
)

export default function Component() {
  return (
    <div className="min-h-screen bg-purple-100 font-sans flex flex-col">
      {/* Navbar */}
      <nav className="py-4">
        <div className="container mx-auto px-4">
          <div className="bg-purple-200 rounded-full py-3 px-6 max-w-6xl mx-auto flex items-center justify-between">
            <div className="text-2xl font-bold text-purple-800">AdAcadabra</div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-purple-800 hover:text-pink-500">Pricing</a>
              <a href="#" className="text-purple-800 hover:text-pink-500">Docs</a>
              <a href="#" className="text-purple-800 hover:text-pink-500">Login</a>
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Hero Section */}
        <section className="text-center py-20 max-w-4xl mx-auto">
          <div className="inline-block bg-white rounded-full px-4 py-2 mb-6">
            <span className="text-green-500 font-semibold flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              3 spots left
            </span>
          </div>
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            AdAcadabra
          </h1>
          <p className="text-2xl text-gray-700 mb-8 font-medium">
            The AI-powered marketing assistant that watches over your ad accounts
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-xl mb-12">
            Get Started
          </button>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex -space-x-2">
              <img className="w-10 h-10 rounded-full border-2 border-white" src="/placeholder.svg?height=40&width=40" alt="User avatar" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="/placeholder.svg?height=40&width=40" alt="User avatar" />
            </div>
            <span className="text-gray-700 font-medium">623+ Happy Customers</span>
          </div>
        </section>

        {/* Ad Networks Section */}
        <section className="py-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Works with the most popular ad platforms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Google Ads', logo: '/placeholder.svg?height=50&width=50' },
              { name: 'LinkedIn Ads', logo: '/placeholder.svg?height=50&width=50' },
              { name: 'Meta Ads', logo: '/placeholder.svg?height=50&width=50' },
              { name: 'Microsoft Ads', logo: '/placeholder.svg?height=50&width=50' },
            ].map((network) => (
              <div key={network.name} className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center">
                <img src={network.logo} alt={`${network.name} logo`} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{network.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Logo Section */}
        <section className="py-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Trusted by 50,000+ businesses for innovative marketing and growth
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: 'Lumina', logo: '/placeholder.svg?height=40&width=120' },
              { name: 'Vortex', logo: '/placeholder.svg?height=40&width=120' },
              { name: 'Velocity', logo: '/placeholder.svg?height=40&width=120' },
              { name: 'Synergy', logo: '/placeholder.svg?height=40&width=120' },
              { name: 'Enigma', logo: '/placeholder.svg?height=40&width=120' },
              { name: 'Spectrum', logo: '/placeholder.svg?height=40&width=120' },
            ].map((company) => (
              <div key={company.name} className="flex items-center justify-center">
                <img src={company.logo} alt={`${company.name} logo`} className="max-h-8" />
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-purple-200 text-purple-700 rounded-full px-4 py-2 font-semibold inline-flex items-center">
              <User className="w-5 h-5 mr-2" />
              Why Us
            </span>
            <h2 className="text-4xl font-bold mt-4 text-gray-900">Why to Choose Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <GraduationCap className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Budget Tracking</h3>
              <p className="text-gray-600">Monitor your total ad spend across all major networks, comparing it to your monthly and quarterly budgets. Set custom fiscal years for precise tracking.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Clock className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Daily Refreshed Insights</h3>
              <p className="text-gray-600">Get daily updates on your budget status with both numerical and graphical representations. Quickly identify if you&apos;re over budget, under budget, or right on target.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <MessageCircle className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proactive Notifications</h3>
              <p className="text-gray-600">Receive email alerts for significant spend changes, accounting for normal fluctuations. Stay informed about projected over or under budget scenarios.</p>
            </div>
          </div>
          
          <div className="mt-12 bg-purple-200 rounded-2xl p-8 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img src="/placeholder.svg?height=300&width=400" alt="AdAcadabra Dashboard" className="rounded-lg shadow-lg" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Magical Ad Management</h3>
                <p className="text-gray-700 mb-6">Experience the power of AI-driven ad management. AdAcadabra connects seamlessly with your ad accounts, providing real-time insights and automated optimization suggestions.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-purple-600">100+</p>
                    <p className="text-sm text-gray-600">Happy clients</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-purple-600">224+</p>
                    <p className="text-sm text-gray-600">Projects done</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-purple-600">08+</p>
                    <p className="text-sm text-gray-600">Years experience</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-purple-600">24+</p>
                    <p className="text-sm text-gray-600">Team members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="bg-purple-200 text-purple-900 p-8 rounded-2xl shadow-xl mb-16">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="flex justify-between items-start">
              <div className="text-pink-600 text-xl font-semibold">Where you want to be</div>
              <div className="bg-white rounded-lg p-6 w-2/3 relative">
                <h2 className="text-2xl font-bold mb-4">Confidently scale pipeline and revenue with B2B ads 💰💸</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Run powerful campaigns for your company or clients</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Stay ahead of the competition with the latest strategies</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Quickly see the ROI from your ad spend skyrocket</span>
                  </li>
                </ul>
                <CurvedArrow className="absolute -left-24 top-1/2 transform -translate-y-1/2 scale-x-[-1]" color="#EC4899" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="bg-white rounded-lg p-6 w-2/3">
                <h2 className="text-2xl font-bold mb-4">Stop struggling with manual ad management</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Constantly monitoring multiple ad platforms is time-consuming</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Manual optimization often leads to missed opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Lack of real-time insights can result in wasted ad spend</span>
                  </li>
                </ul>
              </div>
              <div className="text-pink-600 text-xl font-semibold text-right">The hard way to get there</div>
            </div>

            <div className="flex justify-between items-start">
              <div className="text-purple-700 text-xl font-semibold">The best way to get there</div>
              <div className="bg-white rounded-lg p-6 w-2/3 relative">
                <h2 className="text-2xl font-bold mb-4">
                  Shortcut your way to success with AdAcadabra
                  <br />
                  100% automated 🧙‍♂️
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>AI-powered monitoring of your Google, LinkedIn, and Bing ad accounts</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Real-time optimization suggestions to maximize your ROI</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Automated budget tracking and performance reporting</span>
                  </li>
                </ul>
                <CurvedArrow className="absolute -left-24 top-1/2 transform -translate-y-1/2 scale-x-[-1]" color="#7C3AED" />
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Membership Benefits Section */}
        <section className="py-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-purple-200 text-purple-700 rounded-full px-4 py-2 font-semibold inline-flex items-center">
              <Crown className="w-5 h-5 mr-2" />
              Benefits
            </span>
            <h2 className="text-5xl font-bold mt-4 text-gray-900">Exclusive Membership Benefits</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                <Percent className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Budget Allocation</h3>
              <p className="text-gray-600">AI-powered suggestions for optimal budget distribution across your ad platforms.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Performance Alerts</h3>
              <p className="text-gray-600">Instant notifications for significant changes in ad performance or spend.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                <BarChart2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics Dashboard</h3>
              <p className="text-gray-600">Comprehensive view of your ad performance across all connected platforms.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                <Rocket className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automated Optimization</h3>
              <p className="text-gray-600">AI-driven adjustments to your campaigns for maximum ROI.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-user Collaboration</h3>
              <p className="text-gray-600">Seamlessly work with your team on ad management and reporting.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Integration Support</h3>
              <p className="text-gray-600">Connect AdAcadabra with your existing marketing tools and CRM.</p>
            </div>
          </div>
        </section>

        {/* Comparison Box Section */}
        <section className="py-20 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-100 rounded-3xl p-8 border-4 border-red-400 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">📊</span>
                  <h3 className="text-2xl font-semibold text-purple-800">Manual Tracking</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <XCircle className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-purple-900">Updating spreadsheets manually</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-purple-900">Error-prone data entry and calculations</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-6 h-6 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-purple-900">Time-consuming process</span>
                  </li>
                </ul>
              </div>
              <p className="text-purple-700 mt-6 italic">Inefficient and prone to mistakes...</p>
            </div>
            <div className="bg-purple-200 rounded-3xl p-8 border-4 border-green-400">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">🧙‍♂️</span>
                <h3 className="text-2xl font-semibold text-purple-800">AdAcadabra</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-purple-900">Automated budget tracking across all platforms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-purple-900">AI-powered insights and optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-purple-900">Real-time updates and notifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-purple-900">Scalable for businesses of all sizes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-purple-900">Comprehensive reporting and analytics</span>
                </li>
              </ul>
              <button className="mt-8 bg-purple-600 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700 transition duration-300">
                Get Started with AdAcadabra
              </button>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 max-w-6xl mx-auto relative">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
          <div className="flex justify-center items-center space-x-4">
            <div className="bg-white rounded-lg p-6 shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300 ease-in-out w-80 z-10 border-4 border-black">
              <p className="text-gray-700 mb-4">&ldquo;AdAcadabra has revolutionized our ad management. The AI-powered insights have helped us optimize our campaigns like never before. It&apos;s like having a marketing genius working 24/7!&rdquo;</p>
              <div className="flex items-center">
                <img src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Marketing Director, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300 ease-in-out w-80 z-20 border-4 border-black">
              <p className="text-gray-700 mb-4">&ldquo;The budget tracking feature is a game-changer. We&apos;ve cut unnecessary spending and improved our ROI across all platforms. AdAcadabra pays for itself many times over!&rdquo;</p>
              <div className="flex items-center">
                <img src="/placeholder.svg?height=40&width=40" alt="Michael Chen" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-gray-500">CEO, GrowthHackers Inc.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 ease-in-out w-80 z-10 border-4 border-black">
              <p className="text-gray-700 mb-4">&ldquo;As a small business owner, AdAcadabra has been invaluable. It&apos;s like having a full-time ad specialist on my team. The proactive notifications have saved me from overspending multiple times.&rdquo;</p>
              <div className="flex items-center">
                <img src="/placeholder.svg?height=40&width=40" alt="Emily Rodriguez" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-semibold">Emily Rodriguez</p>
                  <p className="text-sm text-gray-500">Owner, Boutique Bliss</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-purple-200 text-gray-900 rounded-2xl p-12 text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Ad Management?</h2>
          <p className="text-xl mb-8">Join thousands of businesses using AdAcadabra to optimize their ad spend and boost ROI.</p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300">
            Get Started Now
          </button>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-purple-200 rounded-3xl py-8 px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-900">AdAcadabra</h3>
                <p className="text-purple-700">AI-powered ad management for modern businesses</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-900">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-purple-700 hover:text-pink-500">Features</a></li>
                  <li><a href="#" className="text-purple-700 hover:text-pink-500">Pricing</a></li>
                  <li><a href="#" className="text-purple-700 hover:text-pink-500">Case Studies</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-900">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-purple-700 hover:text-pink-500">About Us</a></li>
                  <li><a href="#" className="text-purple-700 hover:text-pink-500">Careers</a></li>
                  <li><a href="#" className="text-purple-700 hover:text-pink-500">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-purple-300 text-center text-purple-700">
              <p>&copy; 2024 AdAcadabra. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}