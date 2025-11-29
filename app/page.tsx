import Link from 'next/link'
import { Zap, Workflow, Brain, ArrowRight, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">FlowMaster AI</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
            <Link href="/signup" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Automate Your Workflows with <span className="text-indigo-600">AI Power</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Connect 200+ apps, build intelligent automations, and let AI handle the repetitive tasks. 
            Focus on what matters while FlowMaster works for you.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/signup" className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition flex items-center">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/demo" className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition">
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Workflow className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Visual Workflow Builder</h3>
            <p className="text-gray-600">Drag-and-drop interface to create complex automations without code</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Brain className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3">AI-Powered Suggestions</h3>
            <p className="text-gray-600">Smart recommendations for workflow optimization and automation ideas</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Zap className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3">200+ Integrations</h3>
            <p className="text-gray-600">Connect with all your favorite tools and services seamlessly</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-gray-600 mb-6">Perfect for trying out</p>
            <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> 100 tasks/month</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> 5 workflows</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Basic integrations</li>
            </ul>
            <Link href="/signup" className="block text-center bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              Get Started
            </Link>
          </div>
          
          <div className="bg-indigo-600 text-white p-8 rounded-xl shadow-xl transform scale-105">
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-indigo-100 mb-6">Most popular choice</p>
            <div className="text-4xl font-bold mb-6">$29<span className="text-lg text-indigo-200">/mo</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-white mr-2" /> 10,000 tasks/month</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-white mr-2" /> Unlimited workflows</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-white mr-2" /> All integrations</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-white mr-2" /> AI suggestions</li>
            </ul>
            <Link href="/signup?plan=pro" className="block text-center bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition font-semibold">
              Start Free Trial
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold mb-2">Business</h3>
            <p className="text-gray-600 mb-6">For growing teams</p>
            <div className="text-4xl font-bold mb-6">$99<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> 100,000 tasks/month</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Team collaboration</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Priority support</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Advanced analytics</li>
            </ul>
            <Link href="/signup?plan=business" className="block text-center bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="h-6 w-6" />
            <span className="text-xl font-bold">FlowMaster AI</span>
          </div>
          <p className="text-gray-400">© 2025 FlowMaster AI. Built with Bhindi Platform.</p>
        </div>
      </footer>
    </div>
  )
}