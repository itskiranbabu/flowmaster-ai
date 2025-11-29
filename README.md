# FlowMaster AI 🚀

AI-Powered Workflow Automation Platform built with Next.js, Supabase, and Stripe.

## Features

- 🎨 **Beautiful Landing Page** - Modern, responsive design with Tailwind CSS
- 🔐 **Authentication** - Secure login/signup with Supabase Auth
- 📊 **Dashboard** - Real-time workflow analytics and monitoring
- ⚡ **200+ Integrations** - Connect with your favorite tools
- 🤖 **AI-Powered** - Smart workflow suggestions and optimization
- 💳 **Stripe Payments** - Subscription management built-in

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Lucide Icons
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Payments**: Stripe
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/itskiranbabu/flowmaster-ai.git
cd flowmaster-ai
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Update `.env.local` with your credentials:
- Supabase URL and keys
- Stripe API keys
- App URL

5. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000)

## Deployment

This app is optimized for Vercel deployment:

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

## Project Structure

\`\`\`
flowmaster-ai/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   ├── login/              # Login page
│   ├── signup/             # Signup page
│   └── dashboard/          # Dashboard
├── components/             # Reusable components
├── lib/                    # Utilities and configs
└── public/                 # Static assets
\`\`\`

## Pricing Plans

- **Free**: 100 tasks/month, 5 workflows
- **Pro**: $29/mo - 10K tasks, unlimited workflows
- **Business**: $99/mo - 100K tasks, team features

## Built With Bhindi

This SaaS was built using the Bhindi platform, leveraging:
- Automated GitHub repository creation
- Supabase integration
- Vercel deployment automation
- Stripe payment setup

## License

MIT License - feel free to use this for your own projects!

## Support

For support, email support@flowmaster-ai.com or join our Discord community.

---

Built with ❤️ using Bhindi Platform