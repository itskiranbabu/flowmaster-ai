import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export type Profile = {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  subscription_tier: 'free' | 'pro' | 'business'
  stripe_customer_id: string | null
  created_at: string
  updated_at: string
}

export type Workflow = {
  id: string
  user_id: string
  name: string
  description: string | null
  status: 'active' | 'paused' | 'draft'
  trigger_type: string
  trigger_config: Record<string, any>
  actions: any[]
  runs_count: number
  last_run_at: string | null
  created_at: string
  updated_at: string
}

export type WorkflowRun = {
  id: string
  workflow_id: string
  status: 'running' | 'success' | 'failed'
  started_at: string
  completed_at: string | null
  error_message: string | null
  execution_data: Record<string, any>
  created_at: string
}

export type Integration = {
  id: string
  user_id: string
  service_name: string
  service_type: string
  credentials: Record<string, any>
  is_active: boolean
  created_at: string
  updated_at: string
}

export type Subscription = {
  id: string
  user_id: string
  stripe_subscription_id: string
  stripe_price_id: string
  status: string
  current_period_start: string | null
  current_period_end: string | null
  cancel_at_period_end: boolean
  created_at: string
  updated_at: string
}

export type UsageTracking = {
  id: string
  user_id: string
  month: string
  tasks_executed: number
  workflows_created: number
  created_at: string
  updated_at: string
}