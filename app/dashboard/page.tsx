'use client'

import { Zap, Plus, Workflow, Activity, Users, Settings } from 'lucide-react'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <Zap className="h-8 w-8 text-indigo-600" />
                <span className="text-xl font-bold text-gray-900">FlowMaster AI</span>
              </Link>
              <div className="flex space-x-6">
                <Link href="/dashboard" className="text-indigo-600 font-medium">Dashboard</Link>
                <Link href="/workflows" className="text-gray-600 hover:text-gray-900">Workflows</Link>
                <Link href="/integrations" className="text-gray-600 hover:text-gray-900">Integrations</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
              <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                U
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
          <p className="text-gray-600">Here's what's happening with your workflows today.</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Active Workflows</span>
              <Workflow className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">12</div>
            <div className="text-sm text-green-600 mt-1">+2 this week</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Tasks Executed</span>
              <Activity className="h-5 w-5 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">2,847</div>
            <div className="text-sm text-green-600 mt-1">+18% from last month</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Integrations</span>
              <Users className="h-5 w-5 text-yellow-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">8</div>
            <div className="text-sm text-gray-500 mt-1">200+ available</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Time Saved</span>
              <Zap className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">47h</div>
            <div className="text-sm text-gray-500 mt-1">This month</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition">
              <Plus className="h-6 w-6 text-indigo-600" />
              <span className="font-medium text-gray-900">Create New Workflow</span>
            </button>
            <button className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition">
              <Workflow className="h-6 w-6 text-indigo-600" />
              <span className="font-medium text-gray-900">Browse Templates</span>
            </button>
            <button className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition">
              <Users className="h-6 w-6 text-indigo-600" />
              <span className="font-medium text-gray-900">Add Integration</span>
            </button>
          </div>
        </div>

        {/* Recent Workflows */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Workflows</h2>
          <div className="space-y-4">
            {[
              { name: 'Slack to Email Notifications', status: 'Active', runs: 234 },
              { name: 'GitHub to Trello Sync', status: 'Active', runs: 156 },
              { name: 'Customer Onboarding Flow', status: 'Active', runs: 89 },
            ].map((workflow, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Workflow className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{workflow.name}</h3>
                    <p className="text-sm text-gray-500">{workflow.runs} runs this month</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  {workflow.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}