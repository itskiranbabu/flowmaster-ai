-- FlowMaster AI Database Schema
-- Free-first model with future paid plan support

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  subscription_tier TEXT DEFAULT 'beta' CHECK (subscription_tier IN ('beta', 'free', 'pro', 'business')),
  is_beta_user BOOLEAN DEFAULT true, -- Beta users get lifetime benefits
  beta_joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  stripe_customer_id TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Feature limits table (for future paid plans)
CREATE TABLE public.feature_limits (
  tier TEXT PRIMARY KEY CHECK (tier IN ('beta', 'free', 'pro', 'business')),
  max_workflows INTEGER, -- -1 for unlimited
  max_tasks_per_month INTEGER, -- -1 for unlimited
  max_integrations INTEGER, -- -1 for unlimited
  has_ai_features BOOLEAN DEFAULT false,
  has_team_features BOOLEAN DEFAULT false,
  has_priority_support BOOLEAN DEFAULT false,
  has_advanced_analytics BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default feature limits
INSERT INTO public.feature_limits (tier, max_workflows, max_tasks_per_month, max_integrations, has_ai_features, has_team_features, has_priority_support, has_advanced_analytics) VALUES
  ('beta', -1, -1, -1, true, true, true, true), -- Beta: Everything unlimited
  ('free', 10, 1000, 20, false, false, false, false), -- Free: Limited features
  ('pro', -1, 50000, -1, true, false, true, true), -- Pro: Most features
  ('business', -1, -1, -1, true, true, true, true); -- Business: Everything

-- Workflows table
CREATE TABLE public.workflows (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'paused', 'draft')),
  trigger_type TEXT NOT NULL,
  trigger_config JSONB DEFAULT '{}',
  actions JSONB DEFAULT '[]',
  runs_count INTEGER DEFAULT 0,
  last_run_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Workflow runs table
CREATE TABLE public.workflow_runs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  workflow_id UUID REFERENCES public.workflows(id) ON DELETE CASCADE NOT NULL,
  status TEXT DEFAULT 'running' CHECK (status IN ('running', 'success', 'failed')),
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  error_message TEXT,
  execution_data JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Integrations table
CREATE TABLE public.integrations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  service_name TEXT NOT NULL,
  service_type TEXT NOT NULL,
  credentials JSONB DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, service_name)
);

-- Subscriptions table (for future paid plans)
CREATE TABLE public.subscriptions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  stripe_subscription_id TEXT UNIQUE,
  stripe_price_id TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  cancel_at_period_end BOOLEAN DEFAULT false,
  lifetime_discount_percent INTEGER DEFAULT 0, -- Beta users get 50% discount
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Usage tracking table
CREATE TABLE public.usage_tracking (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  month DATE NOT NULL,
  tasks_executed INTEGER DEFAULT 0,
  workflows_created INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, month)
);

-- Feedback table (for beta users)
CREATE TABLE public.feedback (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  feedback_type TEXT CHECK (feedback_type IN ('bug', 'feature', 'improvement', 'general')),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'reviewing', 'planned', 'completed', 'wont_fix')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_workflows_user_id ON public.workflows(user_id);
CREATE INDEX idx_workflows_status ON public.workflows(status);
CREATE INDEX idx_workflow_runs_workflow_id ON public.workflow_runs(workflow_id);
CREATE INDEX idx_workflow_runs_status ON public.workflow_runs(status);
CREATE INDEX idx_integrations_user_id ON public.integrations(user_id);
CREATE INDEX idx_subscriptions_user_id ON public.subscriptions(user_id);
CREATE INDEX idx_usage_tracking_user_month ON public.usage_tracking(user_id, month);
CREATE INDEX idx_feedback_user_id ON public.feedback(user_id);
CREATE INDEX idx_feedback_status ON public.feedback(status);
CREATE INDEX idx_profiles_beta_user ON public.profiles(is_beta_user);

-- Row Level Security (RLS) Policies

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feature_limits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workflows ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workflow_runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.usage_tracking ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Feature limits policies (read-only for all authenticated users)
CREATE POLICY "Anyone can view feature limits" ON public.feature_limits
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Workflows policies
CREATE POLICY "Users can view own workflows" ON public.workflows
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own workflows" ON public.workflows
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own workflows" ON public.workflows
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own workflows" ON public.workflows
  FOR DELETE USING (auth.uid() = user_id);

-- Workflow runs policies
CREATE POLICY "Users can view own workflow runs" ON public.workflow_runs
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.workflows
      WHERE workflows.id = workflow_runs.workflow_id
      AND workflows.user_id = auth.uid()
    )
  );

-- Integrations policies
CREATE POLICY "Users can view own integrations" ON public.integrations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own integrations" ON public.integrations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own integrations" ON public.integrations
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own integrations" ON public.integrations
  FOR DELETE USING (auth.uid() = user_id);

-- Subscriptions policies
CREATE POLICY "Users can view own subscriptions" ON public.subscriptions
  FOR SELECT USING (auth.uid() = user_id);

-- Usage tracking policies
CREATE POLICY "Users can view own usage" ON public.usage_tracking
  FOR SELECT USING (auth.uid() = user_id);

-- Feedback policies
CREATE POLICY "Users can view own feedback" ON public.feedback
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create feedback" ON public.feedback
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own feedback" ON public.feedback
  FOR UPDATE USING (auth.uid() = user_id);

-- Functions

-- Function to handle new user creation (all users start as beta users)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, subscription_tier, is_beta_user, beta_joined_at)
  VALUES (
    NEW.id, 
    NEW.email, 
    NEW.raw_user_meta_data->>'full_name',
    'beta', -- Everyone starts as beta user
    true,
    NOW()
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to check if user can create workflow
CREATE OR REPLACE FUNCTION public.can_create_workflow(p_user_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
  v_tier TEXT;
  v_max_workflows INTEGER;
  v_current_count INTEGER;
BEGIN
  -- Get user's tier
  SELECT subscription_tier INTO v_tier
  FROM public.profiles
  WHERE id = p_user_id;

  -- Get max workflows for tier
  SELECT max_workflows INTO v_max_workflows
  FROM public.feature_limits
  WHERE tier = v_tier;

  -- If unlimited (-1), return true
  IF v_max_workflows = -1 THEN
    RETURN true;
  END IF;

  -- Count current workflows
  SELECT COUNT(*) INTO v_current_count
  FROM public.workflows
  WHERE user_id = p_user_id AND status != 'draft';

  -- Check if under limit
  RETURN v_current_count < v_max_workflows;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to check monthly task limit
CREATE OR REPLACE FUNCTION public.can_execute_task(p_user_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
  v_tier TEXT;
  v_max_tasks INTEGER;
  v_current_count INTEGER;
  v_current_month DATE;
BEGIN
  -- Get user's tier
  SELECT subscription_tier INTO v_tier
  FROM public.profiles
  WHERE id = p_user_id;

  -- Get max tasks for tier
  SELECT max_tasks_per_month INTO v_max_tasks
  FROM public.feature_limits
  WHERE tier = v_tier;

  -- If unlimited (-1), return true
  IF v_max_tasks = -1 THEN
    RETURN true;
  END IF;

  -- Get current month
  v_current_month := DATE_TRUNC('month', NOW());

  -- Get current task count for this month
  SELECT COALESCE(tasks_executed, 0) INTO v_current_count
  FROM public.usage_tracking
  WHERE user_id = p_user_id AND month = v_current_month;

  -- Check if under limit
  RETURN COALESCE(v_current_count, 0) < v_max_tasks;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER set_updated_at_profiles
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_workflows
  BEFORE UPDATE ON public.workflows
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_integrations
  BEFORE UPDATE ON public.integrations
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_subscriptions
  BEFORE UPDATE ON public.subscriptions
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_usage_tracking
  BEFORE UPDATE ON public.usage_tracking
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_feedback
  BEFORE UPDATE ON public.feedback
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_feature_limits
  BEFORE UPDATE ON public.feature_limits
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();