import Link from 'next/link'
import { Zap, Workflow, Brain, ArrowRight, CheckCircle, Sparkles } from 'lucide-react'

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
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">100% Free During Beta - No Credit Card Required</span>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Automate Your Workflows with <span className="text-indigo-600">AI Power</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Connect 200+ apps, build intelligent automations, and let AI handle the repetitive tasks. 
            Start free today and help us shape the future of workflow automation!
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/signup" className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition flex items-center">
              Start Free Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/demo" className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition">
              Watch Demo
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">No credit card • No time limit • Full access</p>
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

      {/* Current Offering */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Free for Everyone (Beta)</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We're currently in beta and offering full access to all features completely free. 
          Help us improve by using the platform and sharing your feedback!
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-10 rounded-2xl shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Beta Access</h3>
              <p className="text-indigo-100">Everything included, completely free</p>
              <div className="text-5xl font-bold my-6">$0<span className="text-2xl text-indigo-200">/forever</span></div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                <span className="text-lg">Unlimited workflows</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                <span className="text-lg">Unlimited tasks per month</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                <span className="text-lg">All 200+ integrations</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                <span className="text-lg">AI-powered suggestions</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                <span className="text-lg">Priority support during beta</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                <span className="text-lg">Early access to new features</span>
              </div>
            </div>

            <Link href="/signup" className="block text-center bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition">
              Get Started Free
            </Link>
            
            <p className="text-center text-indigo-100 text-sm mt-4">
              No credit card required • Cancel anytime • Keep your data
            </p>
          </div>
        </div>
      </section>

      {/* Future Plans Preview */}
      <section className="container mx-auto px-6 py-20 bg-gray-50 rounded-3xl">
        <h2 className="text-4xl font-bold text-center mb-4">Future Pricing Plans</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Once we exit beta, we'll introduce paid plans with advanced features. 
          Early users will get special lifetime discounts!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto opacity-75">
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
            <div className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full inline-block mb-4">Coming Soon</div>
            <h3 className="text-2xl font-bold mb-2">Free Forever</h3>
            <p className="text-gray-600 mb-6">Perfect for individuals</p>
            <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> 1,000 tasks/month</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> 10 workflows</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Core integrations</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Community support</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-indigo-600 transform scale-105">
            <div className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full inline-block mb-4">Coming Soon</div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-gray-600 mb-6">For power users</p>
            <div className="text-4xl font-bold mb-6">$29<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> 50,000 tasks/month</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Unlimited workflows</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> All integrations</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Advanced AI features</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Priority support</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
            <div className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full inline-block mb-4">Coming Soon</div>
            <h3 className="text-2xl font-bold mb-2">Business</h3>
            <p className="text-gray-600 mb-6">For teams</p>
            <div className="text-4xl font-bold mb-6">$99<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Unlimited tasks</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Team collaboration</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Custom integrations</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Dedicated support</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> SLA guarantee</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6">
            <p className="text-yellow-800 font-semibold text-lg">
              🎁 Beta users get 50% lifetime discount on all paid plans!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="h-6 w-6" />
            <span className="text-xl font-bold">FlowMaster AI</span>
          </div>
          <p className="text-gray-400 mb-2">© 2025 FlowMaster AI. Built with Bhindi Platform.</p>
          <p className="text-gray-500 text-sm">Currently in Beta - Free for all users</p>
        </div>
      </footer>
    </div>
  )
}