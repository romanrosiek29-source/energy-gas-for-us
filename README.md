# Energy and Gas for US

Premium enterprise energy platform providing electricity and natural gas services across the United States.

## Features

- 🏠 Modern, responsive homepage with availability checker
- ⚡ Electricity and natural gas plan discovery
- 👤 Customer account portal (My Account)
- 💳 Pay My Bill functionality
- 📊 Energy usage tracking
- 🔐 Secure authentication
- 📱 Fully responsive design
- 🎨 Premium parrot green theme

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/romanrosiek29-source/energy-gas-for-us.git
cd energy-gas-for-us
```

2. Install dependencies:
```bash
npm install
```

3. Set up Supabase:
   - Create a new Supabase project
   - Run the SQL schema from `schema.sql` in your Supabase SQL editor
   - Copy your project URL and anon key

4. Configure environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Supabase credentials.

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Deployment

The application is deployed on Vercel. Connect your GitHub repository to Vercel for automatic deployments on push.

## License

All rights reserved © 2026 Energy and Gas for US
