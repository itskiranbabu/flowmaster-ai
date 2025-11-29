# FlowMaster AI - Deployment Guide 🚀

Complete guide to deploy your production-ready SaaS application.

## Prerequisites Checklist

- ✅ GitHub repository created
- ✅ Vercel project created
- ✅ Supabase account
- ✅ Stripe account

## Step 1: Supabase Setup

### 1.1 Create Supabase Project
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Click "New Project"
3. Fill in project details
4. Wait for database to provision

### 1.2 Run Database Schema
1. Go to SQL Editor in Supabase Dashboard
2. Copy contents from `supabase/schema.sql`
3. Paste and run the SQL
4. Verify tables are created in Table Editor

### 1.3 Get Supabase Credentials
1. Go to Project Settings → API
2. Copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - Anon/Public Key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Service Role Key → `SUPABASE_SERVICE_ROLE_KEY`

## Step 2: Stripe Setup

### 2.1 Create Products & Prices
1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to Products
3. Create two products:

**Pro Plan:**
- Name: FlowMaster Pro
- Price: $29/month
- Recurring: Monthly
- Copy Price ID → `STRIPE_PRO_PRICE_ID`

**Business Plan:**
- Name: FlowMaster Business
- Price: $99/month
- Recurring: Monthly
- Copy Price ID → `STRIPE_BUSINESS_PRICE_ID`

### 2.2 Get Stripe Keys
1. Go to Developers → API Keys
2. Copy:
   - Publishable Key → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - Secret Key → `STRIPE_SECRET_KEY`

### 2.3 Setup Webhook
1. Go to Developers → Webhooks
2. Click "Add endpoint"
3. URL: `https://your-domain.vercel.app/api/webhooks/stripe`
4. Events to listen:
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copy Signing Secret → `STRIPE_WEBHOOK_SECRET`

## Step 3: Vercel Deployment

### 3.1 Connect GitHub Repository
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Import Project"
3. Select `flowmaster-ai` repository
4. Click "Import"

### 3.2 Configure Environment Variables
Add these in Vercel Project Settings → Environment Variables:

\`\`\`env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
STRIPE_PRO_PRICE_ID=your_pro_price_id
STRIPE_BUSINESS_PRICE_ID=your_business_price_id

# App
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
\`\`\`

### 3.3 Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Your app will be live at `https://flowmaster-ai.vercel.app`

## Step 4: Custom Domain (Optional)

### 4.1 Add Domain in Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### 4.2 Update Environment Variables
Update `NEXT_PUBLIC_APP_URL` with your custom domain

### 4.3 Update Stripe Webhook
Update webhook URL in Stripe Dashboard to use custom domain

## Step 5: Testing

### 5.1 Test Authentication
1. Visit your deployed app
2. Click "Sign Up"
3. Create test account
4. Verify email confirmation works

### 5.2 Test Stripe Integration
1. Use Stripe test cards:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`
2. Subscribe to Pro plan
3. Verify subscription in Stripe Dashboard
4. Check Supabase database for subscription record

### 5.3 Test Webhooks
1. Trigger test webhook in Stripe Dashboard
2. Check Vercel logs for webhook processing
3. Verify database updates

## Step 6: Go Live

### 6.1 Switch to Production Mode
1. Disable Stripe test mode
2. Update Stripe keys to production keys
3. Redeploy on Vercel

### 6.2 Enable Production Features
- Set up monitoring (Vercel Analytics)
- Configure error tracking (Sentry)
- Enable rate limiting
- Set up backup strategy

## Monitoring & Maintenance

### Daily Checks
- Monitor Vercel deployment status
- Check Stripe webhook deliveries
- Review Supabase database health

### Weekly Tasks
- Review user analytics
- Check subscription metrics
- Monitor error logs

### Monthly Tasks
- Database backup
- Security audit
- Performance optimization

## Troubleshooting

### Build Fails
- Check environment variables are set
- Verify all dependencies in package.json
- Review build logs in Vercel

### Webhook Issues
- Verify webhook URL is correct
- Check webhook signing secret
- Review Vercel function logs

### Database Errors
- Verify RLS policies are correct
- Check connection strings
- Review Supabase logs

## Support

Need help? Contact:
- Email: support@flowmaster-ai.com
- Discord: [Join Community]
- Docs: [Documentation]

---

🎉 **Congratulations!** Your production SaaS is now live!

Built with ❤️ using Bhindi Platform