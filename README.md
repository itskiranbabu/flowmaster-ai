# FlowMaster AI 🚀

AI-Powered Workflow Automation Platform - **100% Free During Beta**

[![Beta](https://img.shields.io/badge/Status-Beta-blue)](https://github.com/itskiranbabu/flowmaster-ai)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Built with Bhindi](https://img.shields.io/badge/Built%20with-Bhindi-purple)](https://bhindi.io)

## 🎁 Beta Program

**We're currently in beta and completely free!**

All beta users get:
- ✅ **Unlimited everything** - No limits on workflows, tasks, or integrations
- 🎁 **50% lifetime discount** when we launch paid plans
- 🏆 **Beta badge** and early adopter recognition
- 🔓 **Grandfathered features** - Keep access to features you use during beta
- 📊 **Priority support** and direct access to founders

**No credit card required • No time limits • Full access**

[Get Started Free →](https://flowmaster-ai.vercel.app/signup)

---

## Features

### 🎨 Visual Workflow Builder
Drag-and-drop interface to create complex automations without code. Connect triggers, actions, and conditions visually.

### 🤖 AI-Powered Suggestions
Smart recommendations for workflow optimization and automation ideas based on your usage patterns.

### ⚡ 200+ Integrations
Connect with all your favorite tools:
- **Communication:** Slack, Discord, Telegram, Email
- **Project Management:** Trello, Notion, Linear, ClickUp
- **Development:** GitHub, GitLab, Vercel, Railway
- **Data:** Google Sheets, Airtable, Supabase, PostgreSQL
- **Payments:** Stripe, PayPal, Razorpay
- **And 190+ more!**

### 📊 Real-time Dashboard
Monitor your workflows, track execution stats, and get insights into your automation performance.

### 🔐 Secure & Reliable
- Row-level security with Supabase
- Encrypted credential storage
- 99.9% uptime SLA (coming soon)
- SOC 2 compliant (roadmap)

---

## Tech Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | Next.js 14, React 18, TypeScript |
| **Styling** | Tailwind CSS, Lucide Icons |
| **Database** | Supabase (PostgreSQL) |
| **Auth** | Supabase Auth |
| **Payments** | Stripe (for future paid plans) |
| **Hosting** | Vercel |
| **Version Control** | GitHub |

---

## Getting Started

### For Users

1. Visit [flowmaster-ai.vercel.app](https://flowmaster-ai.vercel.app)
2. Click "Get Started Free"
3. Create your account (no credit card needed)
4. Start building workflows!

### For Developers

#### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- Vercel account (for deployment)

#### Installation

```bash
# Clone the repository
git clone https://github.com/itskiranbabu/flowmaster-ai.git
cd flowmaster-ai

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Update .env.local with your credentials
# - Supabase URL and keys
# - Stripe keys (optional for beta)
# - App URL

# Run development server
npm run dev

# Open http://localhost:3000
```

#### Database Setup

1. Create a Supabase project
2. Run the SQL from `supabase/schema.sql` in SQL Editor
3. Verify tables are created

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed setup instructions.

---

## Project Structure

```
flowmaster-ai/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page (beta messaging)
│   ├── login/                  # Login page
│   ├── signup/                 # Signup page
│   ├── dashboard/              # Dashboard
│   └── api/
│       └── webhooks/
│           └── stripe/         # Stripe webhook handler
├── lib/
│   ├── supabase.ts            # Supabase client & types
│   └── stripe.ts              # Stripe configuration
├── supabase/
│   └── schema.sql             # Database schema with beta support
├── components/                 # Reusable components (coming soon)
├── public/                    # Static assets
├── DEPLOYMENT.md              # Deployment guide
├── MONETIZATION_STRATEGY.md   # Free-to-paid transition plan
└── SETUP_CHECKLIST.md         # Setup progress tracker
```

---

## Roadmap

### ✅ Phase 1: Beta Launch (Current)
- [x] Landing page with beta messaging
- [x] User authentication
- [x] Dashboard interface
- [x] Database schema with beta support
- [x] Stripe integration (ready for future)
- [x] Documentation

### 🚧 Phase 2: Core Features (In Progress)
- [ ] Visual workflow builder
- [ ] Trigger system (webhooks, schedules, manual)
- [ ] Action library (200+ integrations)
- [ ] Workflow execution engine
- [ ] Real-time monitoring
- [ ] Error handling & retries

### 📅 Phase 3: AI Features (Q2 2025)
- [ ] AI workflow suggestions
- [ ] Natural language workflow creation
- [ ] Smart error detection
- [ ] Performance optimization recommendations
- [ ] Predictive analytics

### 💰 Phase 4: Monetization (Q3 2025)
- [ ] Launch paid plans (Free, Pro, Business)
- [ ] Apply beta user discounts (50% lifetime)
- [ ] Team collaboration features
- [ ] Advanced analytics
- [ ] Priority support system

### 🚀 Phase 5: Scale (Q4 2025)
- [ ] Enterprise features
- [ ] Custom integrations
- [ ] White-label options
- [ ] API access
- [ ] Marketplace for workflow templates

---

## Future Pricing (Post-Beta)

### Free Forever
- 1,000 tasks/month
- 10 workflows
- 20 integrations
- Community support

### Pro - $29/month
- 50,000 tasks/month
- Unlimited workflows
- All integrations
- AI features
- Priority support

**Beta users: $14.50/month (50% off forever)**

### Business - $99/month
- Unlimited tasks
- Team collaboration
- Custom integrations
- Dedicated support
- SLA guarantee

**Beta users: $49.50/month (50% off forever)**

See [MONETIZATION_STRATEGY.md](MONETIZATION_STRATEGY.md) for complete details.

---

## Contributing

We're in beta and actively seeking feedback! Here's how you can help:

### Report Bugs
Found a bug? [Open an issue](https://github.com/itskiranbabu/flowmaster-ai/issues) with:
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### Request Features
Have an idea? [Open a feature request](https://github.com/itskiranbabu/flowmaster-ai/issues) with:
- Use case description
- Why it's valuable
- How you'd use it

### Submit Feedback
Use the in-app feedback form or email us at feedback@flowmaster-ai.com

---

## Support

### Documentation
- [Deployment Guide](DEPLOYMENT.md)
- [Setup Checklist](SETUP_CHECKLIST.md)
- [Monetization Strategy](MONETIZATION_STRATEGY.md)

### Community
- **Discord:** [Join our community](https://discord.gg/flowmaster) (coming soon)
- **Email:** support@flowmaster-ai.com
- **Twitter:** [@flowmasterai](https://twitter.com/flowmasterai) (coming soon)

### For Beta Users
- Priority email support
- Direct Slack channel access
- Monthly feedback sessions
- Early access to new features

---

## License

MIT License - see [LICENSE](LICENSE) file for details.

Feel free to use this for your own projects!

---

## Acknowledgments

- **Built with [Bhindi Platform](https://bhindi.io)** - AI-powered development platform
- **Powered by [Supabase](https://supabase.com)** - Open source Firebase alternative
- **Deployed on [Vercel](https://vercel.com)** - The platform for frontend developers
- **Payments by [Stripe](https://stripe.com)** - Payment infrastructure for the internet

---

## Stats

![GitHub stars](https://img.shields.io/github/stars/itskiranbabu/flowmaster-ai?style=social)
![GitHub forks](https://img.shields.io/github/forks/itskiranbabu/flowmaster-ai?style=social)
![GitHub issues](https://img.shields.io/github/issues/itskiranbabu/flowmaster-ai)
![GitHub pull requests](https://img.shields.io/github/issues-pr/itskiranbabu/flowmaster-ai)

---

<div align="center">

**[Get Started Free](https://flowmaster-ai.vercel.app/signup)** • **[View Demo](https://flowmaster-ai.vercel.app/demo)** • **[Documentation](DEPLOYMENT.md)**

Made with ❤️ by the FlowMaster team

*Currently in Beta - 100% Free - No Credit Card Required*

</div>